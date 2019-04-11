<template>
  <v-content class="main-content">
    <v-layout align-space-between justify-space-between column fill-height>
      <MainMessage></MainMessage>
      <MessageTextarea></MessageTextarea>
    </v-layout>
  </v-content>
</template>

<script>
  import MessageTextarea from '@/components/MessageTextarea'
  import MainMessage from '@/containers/MainMessage'
  export default {
    name: "main-container",
    components: {
      MessageTextarea,
      MainMessage,
    }
  }
</script>

<style scoped>
  .main-content {
    height: 100%;
  }
</style>