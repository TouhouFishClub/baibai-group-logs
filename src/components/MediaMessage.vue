<template>
  <div class="msg-text">
    <template v-for="m in msgData">
      <span v-if="m.cqType == 'text'" v-html="formatText(m.msg)"></span>
      <template v-else-if="m.cqType == 'image'">
        <img class="msg-image" v-if="m.url" :src="`http://flanb.msharebox.com:10086/image?url=${m.url}`">
        <img class="msg-image" v-else :src="`http://flanb.msharebox.com:10086/image?d=${m.file}`">
      </template>
      <span v-else>{{JSON.stringify(m)}}</span>
    </template>
    <!--<p>{{JSON.stringify(msgData)}}</p>-->
  </div>
</template>

<script>
  export default {
    name: "media-message",
    props: {
      msgData: {
        require: true
      }
    },
    methods: {
      formatText(msg) {
        return msg.replace(/\n/g, '<br>')
      }
    }
  }
</script>

<style scoped lang="less">
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
      vertical-align:bottom;
    }
  }
</style>