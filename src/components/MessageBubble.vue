<template>
  <div class="message-item">
    <img :src="avatar" class="user-avatar">
    <div class="message-info">
      <span class="user-nick">{{nick}}</span>
      <span class="msg-time">{{timestamp}}</span>
    </div>
    <div class="msg-text">
      {{message}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-bubble",
    props: {
      avatar: {
        default: ''
      },
      nick: {
        default: ''
      },
      timestamp: {
        default: ''
      },
      userId: {
        default: ''
      },
      message: {
        default: ''
      },
    }
  }
</script>

<style scoped lang="less">
  .message-item {
    margin-bottom: 20px;
    padding-left: 55px;
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
        content: '';
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