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
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'nowGroupId'
    ])
  },
  watch: {
    nowGroupId(val, oldVal) {
      this.$axios
        .get(
          `http://flanb.msharebox.com:10086/chathistory?gid=${this.nowGroupId}&ts=`
        )
        .then(res => {
          this.$refs.messageBox.scrollTop = 0;
          this.messageData = res.data.d.map(msg =>
            Object.assign(
              {
                avatar: `http://q1.qlogo.cn/g?b=qq&nk=${msg.uid}&s=100`
              },
              msg
            )
          );
        })
        .catch(err => {
          console.log(err);
        });
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