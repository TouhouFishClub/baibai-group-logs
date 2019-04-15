<template>
  <div class="message-item">
    <img :src="avatar" class="user-avatar">
    <div class="message-info">
      <span class="user-nick">{{nick}}</span>
      <span class="msg-time">{{timestamp|fmtTime}}</span>
    </div>
    <div class="msg-text" v-html="msg">

    </div>
    <MediaMessage :msg-data="checkMsgType"></MediaMessage>
  </div>
</template>

<script>
import formatTime from "@/utils/formatTime.js";
// 时间格式化工具函数
import cqMsgClip from "@/utils/cqMsgClip.js"
import MediaMessage from "@/components/MediaMessage"

import formatImage from "@/utils/formatImage.js";
// 图片信息转换工具函数

export default {
  name: "message-bubble",
  components: {
    MediaMessage
  },
  props: {
    avatar: {
      default: ""
    },
    nick: {
      default: ""
    },
    timestamp: {
      default: ""
    },
    userId: {
      default: ""
    },
    message: {
      default: ""
    }
  },
  computed: {
    checkMsgType() {
      let msgObj = []
      this.message.split('[CQ:').forEach((msgClip, index) => {
        if(index == 0){
          msgObj.push({
            cqType: 'text',
            msg: msgClip
          })
        } else {
          let sp = msgClip.split(']')
          msgObj.push(cqMsgClip(sp[0]))
          msgObj.push({
            cqType: 'text',
            msg: sp[1]
          })
        }
      })
      console.log(msgObj)
      return msgObj
    },

    msg() {
      return formatImage(this.message);
    }
  },
  filters: {
    fmtTime(data) {
      return data ? formatTime(data) : "";
    }
  }
};
</script>

<style scoped lang="less">
.message-item {
  margin-bottom: 20px;
  padding-left: 55px;
  padding-right: 40px;
  position: relative;
  .user-avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .message-info {
    font-size: 14px;
    .msg-time {
      margin-left: 5px;
      color: #afafaf;
      font-size: 12px;
    }
  }
  .msg-text {
    margin-top: 10px;
    padding: 10px;
    background: rgba(155, 155, 155, 0.2);
    display: inline-block;
    word-break: break-all;
    border-radius: 10px;
    position: relative;
    min-height: 40px;
    p {
      margin-bottom: 0;
    }
    &:after {
      content: "";
      height: 0;
      width: 0;
      border: 6px solid rgba(155, 155, 155, 0.2);
      border-bottom-color: transparent;
      border-left-color: transparent;
      position: absolute;
      left: -12px;
      top: 10px;
    }
    .msg-image {
      max-width: 100%;
    }
  }
}
</style>