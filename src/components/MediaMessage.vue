<template>
  <div class="aaa">{{JSON.stringify(msgData)}}</div>
</template>

<script>
  export default {
    name: "media-message",
    props: {
      msgData: {
        require: true
      }
    }
  }
</script>

<style scoped>

</style>