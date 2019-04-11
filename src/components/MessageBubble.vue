<template>
  <div>
    <p>{{userId}}</p>
    <p>{{nick}}</p>
    <p>{{timestamp}}</p>
    <p>{{message}}</p>
    <img :src="avatar" alt="">
    <hr>
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

<style scoped>

</style>