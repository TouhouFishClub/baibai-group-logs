<template>
  <v-container fluid fill-height msg-container ref="messageBox">
    <v-layout column>
      <template v-for="message in messageData">
        <div v-if="message.isCut" class="cut-line" :ref="message.updateId"></div>
        <MessageBubble
          v-else
          :userId="message.uid"
          :nick="message.n"
          :timestamp="message.ts"
          :message="message.d"
          :avatar="message.avatar"
        ></MessageBubble>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import MessageBubble from "@/components/MessageBubble";
import { mapState } from 'vuex'
import { HOST } from "../../global.config"
const MAX_MSG_STEP_TIME = 60000
export default {
  name: "main-message",
  data() {
    return {
      messageData: [],
      updateRef: '',
      loadingData: false,
      lastTimestamp: 0
    };
  },
  components: {
    MessageBubble
  },
  computed: {
    ...mapState([
      'actionGroupId',
      'updateMsg'
    ])
  },
  methods: {
    getMessageData(ts = '') {
      this.$store.commit('onLoading', true)
      this.$axios.get(`${HOST}/chathistory?gid=${this.actionGroupId}&ts=${ts}`)
        .then(res => {
          let refTarget = Date.now(), msgData = this.mixinData(res.data.d.reverse())
          this.lastTimestamp = msgData[0].ts
          this.messageData = msgData.map(msg => Object.assign({
            avatar: `http://q1.qlogo.cn/g?b=qq&nk=${msg.uid}&s=100`
          }, msg)).concat([{
            isCut: true,
            updateId: refTarget
          }]).concat(this.messageData)
          this.updateRef = refTarget
        })
        .catch(err => {
          console.log(err);
        });
    },
    mixinData (data) {
      let newData = [], dataTmp = {}, msgGroup = [], tsTmp = 0
      data.forEach((d, i) => {
        if(i == 0){
          dataTmp = d
          msgGroup.push(d.d)
          tsTmp = d.ts
        } else {
          if(d.uid == dataTmp.uid && d.ts - tsTmp < MAX_MSG_STEP_TIME){
            msgGroup.push(d.d)
            tsTmp = d.ts
          } else {
            newData.push(Object.assign({}, dataTmp, {d : msgGroup.concat([])}))
            dataTmp = d
            msgGroup = [d.d]
            tsTmp = d.ts
          }
        }
      })
      newData.push(Object.assign({}, dataTmp, {d : msgGroup.concat([])}))
      // console.log(newData)
      return newData
    },
    refetchMsg() {
      // 清空并防止触发重复渲染
      this.messageData.length = 0

      this.getMessageData()
    }
  },
  mounted(){
    this.$refs.messageBox.addEventListener('scroll', e => {
      if(e.target.scrollTop == 0 && !this.$store.state.loadingData){
        this.getMessageData(this.lastTimestamp)
      }
    })
  },
  updated(){
    this.$refs.messageBox.scrollTop = this.$refs[this.updateRef][0].offsetTop
    this.$store.commit('onLoading', false)
  },
  watch: {
    actionGroupId(val, oldVal) {
      this.refetchMsg()
    },
    updateMsg(val, oldVal){
      this.refetchMsg()
    }
  }
};
</script>

<style scoped>
.cut-line {
  padding-bottom: 1px;
}
.msg-container {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100%;
}
</style>