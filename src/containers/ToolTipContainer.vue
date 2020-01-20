<template>
  <div class="tool-tip-container">

  </div>
</template>

<script>
  export default {
    name: "ToolTipContainer"
  }
</script>

<style lang="less" scoped>
  .tool-tip-container {
    height: 50px;
    background: #eee;
    border-top: 1px solid #ddd;
  }
</style>
<style lang="less">
  .theme--dark .tool-tip-container {
    background: #333;
    border-top-color: #222;
  }
</style>