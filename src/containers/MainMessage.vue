<template>
  <v-container fluid fill-height test-con>
    <v-layout column>
      <template v-for="message in messageData">
        <MessageBubble
          :userId="message.uid"
          :nick="message.n"
          :timestamp="message.ts"
          :message="message.d"
          :avatar="message.avatar"
        >
        </MessageBubble>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
  import MessageBubble from '@/components/MessageBubble'
  export default {
    name: "main-message",
    data() {
      return {
        nowGroupId: this.$store.getters.nowGroupId,
        messageData:[]
      }
    },
    components: {
      MessageBubble
    },
    computed: {
      getGroupId() {
        return this.$store.getters.nowGroupId
      }
    },
    watch: {
      getGroupId(val, oldVal) {
        this.$axios.get(`http://flanb.msharebox.com:10086/chathistory?gid=${this.$store.getters.nowGroupId}&ts=`)
          .then(res => {
            this.messageData = res.data.d.map(msg => Object.assign({
              avatar: `http://q1.qlogo.cn/g?b=qq&nk=${msg.uid}&s=100`
            }, msg))
          })
          .catch(err => {
            console.log(err)
          })
        this.nowGroupId = this.$store.getters.nowGroupId
      }
    }
  }
</script>

<style scoped>
  .test-con {
    overflow-y: scroll;
    max-height: 100%;
  }
</style>