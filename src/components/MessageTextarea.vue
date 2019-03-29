<template>
  <div textarea-box-height>
    <v-textarea
      solo
      name="message-input"
      label="message textarea"
      hide-details
      no-resize
    >
    </v-textarea>
  </div>
</template>

<script>
  export default {
    name: "message-textarea"
  }
</script>

<style scoped>
  .textarea-box-height {
    flex: 0 0 auto;
    min-height: 180px;
  }
</style>