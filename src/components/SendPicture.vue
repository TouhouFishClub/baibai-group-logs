<template>
  <div class="send-pic">
    <input type="file" name="file" accept=".jpg, .jpeg, .png" @change="uploadAvatar">
    <v-btn icon>
      <v-icon>mdi mdi-image-size-select-actual</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "SendPicture",
    methods: {
      uploadAvatar(avatar) {
        console.log(avatar.target.files[0])
        let file = avatar.target.files[0]
        let data = new FormData();
        data.append("file", file, file.name);//很重要 data.append("file", file);不成功
        data.append('data',112)
        console.log(data.get('file'))
        return axios.post("http://127.0.0.1:8233/file", data, {
          headers: { "content-type": "multipart/form-data" }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .send-pic {
    padding: 0 10px;

  }
</style>