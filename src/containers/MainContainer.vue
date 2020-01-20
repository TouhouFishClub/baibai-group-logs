<template>
  <v-content class="main-content">
    <v-layout align-space-between justify-space-between column fill-height>
      <MainMessage></MainMessage>
      <ToolTipContainer></ToolTipContainer>
      <MessageTextarea></MessageTextarea>
    </v-layout>
  </v-content>
</template>

<script>
  import MessageTextarea from '@/components/MessageTextarea'
  import MainMessage from '@/containers/MainMessage'
  import ToolTipContainer from '@/containers/ToolTipContainer'
  export default {
    name: "main-container",
    components: {
      MessageTextarea,
      MainMessage,
      ToolTipContainer,
    }
  }
</script>

<style lang="less" scoped>
  .main-content {
    height: 100%;
  }
</style>