<template>
  <div :class="{'message-item' : true, 'is-baibai' : userId == 2375373419}">
    <img :src="avatar" class="user-avatar">
    <div class="message-info">
      <span class="user-nick">{{nick}}</span>
      <span class="msg-time">{{timestamp|fmtTime}}</span>
    </div>
    <div class="message-group">
      <div class="msg-line-bar" v-for="(msgTypes, index) in checkMsgType">
        <MediaMessage
          :class="[
            checkMsgType.length > 1 ? 'inset' : 'normal',
            index == 0 ? 'first': '',
            index == checkMsgType.length - 1 ? 'last' : ''
          ]"
          :msg-data="msgTypes"
          :msg-type="userId == 2375373419 ? 'mine' : 'other'"
        ></MediaMessage>
      </div>
    </div>
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
      return this.message.map(msg => {
        let msgObj = []
        msg.split('[CQ:').forEach((msgClip, index) => {
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
      })
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
  .message-group {
    margin-top: 10px;
    position: relative;
    .msg-line-bar {
      margin-top: 1px;
      &:first-child {
        margin-top: 0;
      }
      .normal {
        border-radius: 15px;
      }
      .inset {
        border-radius: 15px;
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
      }
      .first {
        border-top-left-radius: 15px;
      }
      .last {
        border-bottom-left-radius: 15px;
      }
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
      top: 12px;
    }
  }
  &.is-baibai {
    padding-right: 55px;
    padding-left: 40px;
    text-align: right;
    .message-group {
      &:after {
        left: auto;
        right: -12px;
        border: 6px solid  rgba(54, 174, 255, 0.3);
        border-bottom-color: transparent;
        border-right-color: transparent;
      }
      .msg-line-bar {
        .inset {
          border-radius: 15px;
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
        }
        .first {
          border-top-right-radius: 15px;
        }
        .last {
          border-bottom-right-radius: 15px;
        }
      }
    }
    .user-avatar {
      right: 0;
      left: auto;
    }
  }
}
</style>