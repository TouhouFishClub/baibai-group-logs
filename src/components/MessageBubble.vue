<template>
  <div class="message-item">
    <img :src="avatar" class="user-avatar">
    <div class="message-info">
      <span class="user-nick">{{nick}}</span>
      <span class="msg-time">{{timestamp|fmtTime}}</span>
    </div>
    <div class="msg-text">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "message-bubble",
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
  filters: {
    fmtTime(data) {
      let time;
      if (data) {
        time = new Date(data);
        let year = time.getFullYear();
        let month = time.getMonth();
        let day = time.getDate();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        minute = minute < 10 ? "0" + minute : minute;
        hour = hour < 10 ? "0" + hour : hour;
        second = second < 10 ? "0" + second : second;
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      }
      return data;
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