<template>
  <div class="tool-tip-container">
    <SendPicture/>
    <ChangePort/>
  </div>
</template>

<script>
  import SendPicture from "../components/SendPicture";
  import ChangePort from "../components/ChangePort";
  export default {
    name: "ToolTipContainer",
    components: {
      SendPicture,
			ChangePort,
    }
  }
</script>

<style lang="less" scoped>
  .tool-tip-container {
    height: 50px;
    background: #eee;
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
<style lang="less">
  .theme--dark .tool-tip-container {
    background: #333;
    border-top-color: #222;
  }
</style>