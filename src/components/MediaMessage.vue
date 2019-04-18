<template>
  <div class="msg-text">
    <template v-for="m in msgData">
      <span v-if="m.cqType == 'text'" v-html="formatText(m.msg)"></span>
      <template v-else-if="m.cqType == 'image'">
        <img class="msg-image" v-if="m.url" :src="`http://flanb.msharebox.com:10086/image?url=${m.url}`">
        <img class="msg-image" v-else :src="`http://flanb.msharebox.com:10086/image?d=${m.file}`">
      </template>
      <div v-else-if="m.cqType == 'share'" class="msg-share" @click="openUrl(m.url)">
        <p class="share-title">{{m.title}}</p>
        <div class="share-desc-container">
          <div class="content">{{m.content}}</div>
          <img :src="m.image" class="share-img">
        </div>
      </div>
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
      },
      openUrl(url){
        window.open(url)
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
    .msg-share {
      max-width: 220px;
      p.share-title {
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        margin-bottom: 4px;
        max-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        flex-direction: column;
      }
      .share-desc-container {
        display: flex;
        cursor: pointer;
        .content {
          line-height: 20px;
          max-height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          flex-direction: column;
          opacity: .6;
        }
        .share-img {
          width: 60px;
          height: 60px;
          margin-left: 4px;
          flex-shrink: 0;
        }
      }
    }
  }
</style>