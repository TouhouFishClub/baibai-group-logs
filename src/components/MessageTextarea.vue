<template>
  <div class="textarea-box-height" id="textarea">
    <v-textarea
      solo
      name="message-input"
      label="message textarea"
      class="text-input"
      hide-details
      row-height="20"
      rows="3"
      no-resize
      ref="textContainer"
      v-model="inputText"
    ></v-textarea>
    <!-- 发送按钮（临时） -->
    <v-btn class="submit-btn" @click="sendMsg"><i class="icon mdi mdi-send"></i>发送</v-btn>
    <!--<div class="button-groups">-->
      <!--<v-btn small>取 消</v-btn>-->
      <!--<v-btn color="info" small>发 送</v-btn>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {HOST} from "../../global.config"

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
      this.$axios.get(`${HOST}/send_group_msg?gid=${this.actionGroupId}&d=${encodeURIComponent(this.inputText)}`)
        .then(res => {
          if(res.data.result == 'ok'){
            this.$store.commit('updateMsg', Date.now())
            this.inputText = ''
          } else {
            console.log(res)
          }
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

<style lang="less" scoped>
.textarea-box-height {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: #eee;
  border-top: 1px solid #ddd;
  .text-input {
    margin: 5px;
    border: 1px solid #DDD;
    border-radius: 10px;
    overflow: hidden;
  }
  .submit-btn {
    height: calc(100% - 30px);
    min-height: 50px;
    border-radius: 20px;
    .icon {
      margin-right: 5px;
      transform: rotate(-45deg);
    }
  }
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
<style lang="less">
  #textarea .v-input__slot {
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  .text-input textarea {
    margin-top: 0!important;
  }
  .text-input label {
    top: 6px!important;
  }
  .theme--dark .textarea-box-height {
    background: #333;
    border-top-color: #222;
    .text-input {
      border-color: #222;
    }
  }
</style>