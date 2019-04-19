<template>
  <div class="textarea-box-height" id="textarea">
    <v-textarea
      solo
      name="message-input"
      label="message textarea"
      hide-details
      no-resize
      ref="textContainer"
      v-model="inputText"
    ></v-textarea>
    <!-- 发送按钮（临时） -->
    <v-btn @click="sendMsg">发送</v-btn>
    <!--<div class="button-groups">-->
      <!--<v-btn small>取 消</v-btn>-->
      <!--<v-btn color="info" small>发 送</v-btn>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "message-textarea",
  data() {
    return {
      inputText: undefined
    }
  },
  computed: {
    ...mapState([
      'actionGroupId',
    ])
  },
  methods: {
    sendMsg() {
      // console.log(this.inputText)
      this.$axios.get(`http://flanb.msharebox.com:23334/send_group_msg?group_id=${this.actionGroupId}&message=${this.inputText}`)
        .then(res => {
          this.$store.commit('updateMsg', Date.now())
          this.inputText = ''
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // watch: {
  //   inputText(val, oldVal){
  //     console.log(val)
  //     console.log(oldVal)
  //   }
  // }
}
</script>

<style scoped>
.textarea-box-height {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.button-groups {
  margin-bottom: 6px;
  min-width: 232px;
  text-align: right;
  background: #fff;
}
.theme--dark.application .button-groups {
  background: #424242;
}
.v-btn.v-btn--small {
  min-width: 100px;
}
</style>
<style>
#textarea .v-input__slot {
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>