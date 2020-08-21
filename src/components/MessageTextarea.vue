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
    <v-btn class="submit-btn" @click="sendMsg">
      <template v-if="isSend">
        <i class="icon loading mdi mdi-loading"></i>发送中...
      </template>
      <template v-else>
        <i class="icon mdi mdi-send"></i>发送
      </template>
    </v-btn>
    <!--<div class="button-groups">-->
      <!--<v-btn small>取 消</v-btn>-->
      <!--<v-btn color="info" small>发 送</v-btn>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { HOST } from "../../global.config"

export default {
  name: "message-textarea",
  data() {
    return {
      inputText: undefined,
      isSend: false
    }
  },
  computed: {
    ...mapState([
      'actionGroupId',
      'hasImage',
      'imgObj',
    ])
  },
  methods: {
    sendMsg() {
      if(this.isSend){
        return
      }
      this.isSend = true
      if(this.hasImage && this.imgObj) {
        // console.log(avatar.target.files[0])
        let file = this.imgObj
        let data = new FormData();
        data.append("file", file, file.name)
        console.log(data.get('file'))
        // return axios.post("http://127.0.0.1:8233/file", data, {
        this.$axios.post(`${HOST}/send_group_multipart_data`, data, {
          headers: { "content-type": "multipart/form-data" }
        })
        .then(res => {
          // console.log(res.data)
          let msg = `[CQ:image,file=file:/home/hduser/upload/tk/coolq-data/cq/data/image/send/upload/${res.data.filename}]`
          if(this.inputText) {
            msg += this.inputText
          }
          this.$axios.get(`${HOST}/send_group_msg?gid=${this.actionGroupId}&d=${msg}`)
            .then(res => {
              this.isSend = false
              if(res.data.result == 'ok'){
                this.$store.dispatch('clearTools')
                this.inputText = ''
                this.$store.commit('updateMsg', Date.now())
              } else {
                console.log(res)
              }
            })
            .catch(err => {
              this.isSend = false
              console.log(err);
            })
        })
        .catch(err => {
          this.isSend = false
          console.log(err);
        })
      } else {
        if(this.inputText){
          // console.log(this.inputText)
          this.$axios.get(`${HOST}/send_group_msg?gid=${this.actionGroupId}&d=${encodeURIComponent(this.inputText)}`)
            .then(res => {
              this.isSend = false
              if(res.data.result == 'ok'){
                this.$store.commit('updateMsg', Date.now())
                this.inputText = ''
              } else {
                console.log(res)
              }
            })
            .catch(err => {
              this.isSend = false
              console.log(err);
            });
        } else {
          this.isSend = false
        }
      }
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
@keyframes rot {
  0% { transform: rotate(0deg) }
  25% { transform: rotate(90deg) }
  50% { transform: rotate(180deg) }
  75% { transform: rotate(270deg) }
  100% { transform: rotate(360deg) }
}
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
      &.loading {
        animation: rot .5s linear infinite;
      }
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