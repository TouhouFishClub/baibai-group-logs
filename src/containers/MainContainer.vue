<template>
  <v-content class="main-content">
    <v-layout align-space-between justify-space-between column :style="`height: ${height}px`">
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
    data() {
      return {
        screenWidth: document.documentElement.clientWidth,
        screenHeight: document.documentElement.clientHeight,
        height: 0
      }
    },
    beforeMount() {
      this.resize()
      window.onresize = () => {
        this.screenWidth = document.documentElement.clientWidth
        this.screenHeight = document.documentElement.clientHeight
      }
    },
    components: {
      MessageTextarea,
      MainMessage,
      ToolTipContainer,
    },
    watch:{
      screenWidth(){
        this.resize()
      },
      screenHeight(){
        this.resize()
      }
    },
    methods: {
      resize() {
        let fixTop = 64
        if(this.screenWidth < 960)
          fixTop = 56
        this.height = document.documentElement.clientHeight - fixTop
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-content {
    height: 100%;
    box-sizing: border-box;
  }
</style>