<template>
  <div :class="{'message-item' : true, 'is-baibai' : userId == 2375373419}">
    <img :src="avatar" class="user-avatar">
    <div class="message-info">
      <span class="user-nick">{{nick}}</span>
      <span class="msg-time">{{timestamp|fmtTime}}</span>
    </div>
    <MediaMessage :msg-data="checkMsgType"></MediaMessage>
  </div>
</template>

<script>
import formatTime from "@/utils/formatTime.js";
// 时间格式化工具函数
import cqMsgClip from "@/utils/cqMsgClip.js"
import MediaMessage from "@/components/MediaMessage"

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
          if(msgClip){
            msgObj.push({
              cqType: 'text',
              msg: msgClip
            })
          }
        } else {
          let sp = msgClip.split(']')
          msgObj.push(cqMsgClip(sp[0]))
          if(sp[1]){
            msgObj.push({
              cqType: 'text',
              msg: sp[1]
            })
          }
        }
      })
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
  &.is-baibai {
    padding-right: 55px;
    padding-left: 40px;
    text-align: right;
    .user-avatar {
      right: 0;
      left: auto;
    }
    .msg-text {
      text-align: left;
      background: rgba(54, 174, 255, 0.3);
      &:after {
        left: auto;
        right: -12px;
        border: 6px solid  rgba(54, 174, 255, 0.3);
        border-bottom-color: transparent;
        border-right-color: transparent;
      }
    }
  }
}
</style>