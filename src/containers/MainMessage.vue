<template>
  <v-container fluid fill-height test-con ref="messageBox" @scroll="bind&&getMoreMessage($event)">
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
export default {
  name: "main-message",
  data() {
    return {
      nowGroupId: this.$store.getters.nowGroupId,
      messageData: [],
      bind: true
    };
  },
  methods: {
    getMoreMessage(e) {
      if (
        e.target.scrollTop + e.target.clientHeight + 100 >=
        e.target.scrollHeight
      ) {
        this.bind = false;
        this.$axios
          .get(
            `http://flanb.msharebox.com:10086/chathistory?gid=${
              this.nowGroupId
            }&ts=${this.messageData[this.messageData.length - 1].ts}`
          )
          .then(res => {
            if (res.data.d) {
              this.messageData = this.messageData.concat(
                res.data.d.map(msg =>
                  Object.assign(
                    {
                      avatar: `http://q1.qlogo.cn/g?b=qq&nk=${msg.uid}&s=100`
                    },
                    msg
                  )
                )
              );
              setTimeout(() => {
                this.bind = true;
              }, 3000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  components: {
    MessageBubble
  },
  computed: {
    getGroupId() {
      return this.$store.getters.nowGroupId;
    }
  },
  watch: {
    getGroupId(val, oldVal) {
      this.$axios
        .get(
          `http://flanb.msharebox.com:10086/chathistory?gid=${
            this.$store.getters.nowGroupId
          }&ts=`
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
          console.log(this.messageData);
        })
        .catch(err => {
          console.log(err);
        });
      this.nowGroupId = this.$store.getters.nowGroupId;
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