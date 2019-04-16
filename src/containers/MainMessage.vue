<template>
  <v-container fluid fill-height test-con ref="messageBox">
    <v-layout column>
      <template v-for="message in messageData">
        <MessageBubble
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
export default {
  name: "main-message",
  data() {
    return {
      messageData: []
    };
  },
  components: {
    MessageBubble
  },
  computed: {
    ...mapState([
      'actionGroupId'
    ])
  },
  methods: {
    getMessageData(ts = '') {
      this.$axios.get(`http://flanb.msharebox.com:10086/chathistory?gid=${this.actionGroupId}&ts=${ts}`)
        .then(res => {
          this.$refs.messageBox.scrollTop = 0;
          this.messageData = res.data.d.reverse().map(msg => Object.assign({
            avatar: `http://q1.qlogo.cn/g?b=qq&nk=${msg.uid}&s=100`
          }, msg)).concat(this.messageData)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    actionGroupId(val, oldVal) {
      this.messageData = []
      this.getMessageData()
    }
  }
};
</script>

<style scoped>
.test-con {
  overflow-y: auto;
  max-height: 100%;
}
</style>