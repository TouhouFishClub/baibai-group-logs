<template>
  <div class="send-pic">
    <v-btn icon @click="selectImage">
      <v-icon>mdi mdi-image-size-select-actual</v-icon>
    </v-btn>
    <input
      type="file"
      name="file"
      accept="image/png,image/gif,image/jpg,image/jpeg"
      ref="fileInput"
      @change="updateImage"
      style="width: 100px; display: none;"
    >
    <div v-if="imagePre" class="image-preview">
      <div class="img-box">
        <div class="img-container">
          <img :src="imagePre">
          <v-btn class="close" fab dark small depressed color="red" @click="deleteFile">
            <v-icon dark>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    name: "SendPicture",
    data() {
      return {
        imagePre: ''
      }
    },
    computed: {
      ...mapState([
        'actionGroupId',
        'clearImage',
      ])
    },
    methods: {
      deleteFile() {
        this.$refs.fileInput.value = ''
        this.imagePre = ''
        this.$store.commit('addImage', false)
      },
      selectImage() {
        this.$refs.fileInput.click()
      },
      updateImage() {
        let input = this.$refs.fileInput
        const reader = new FileReader()
        reader.readAsDataURL(input.files[0]) // input.files[0]为第一个文件
        reader.onload = ()=>{
          this.imagePre = reader.result
          this.$store.commit('addImage', true)
          this.$store.commit('changeImage', this.$refs.fileInput.files[0])
        }
      },
    },
    watch: {
      clearImage() {
        this.deleteFile()
      }
    }
  }
</script>

<style lang="less" scoped>
  .send-pic {
    padding: 0 10px;
    position: relative;
    .image-preview {
      position: absolute;
      top: -155px;
      width: 150px;
      height: 150px;
      .img-box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0,0,0,.5);
        .img-container {
          width: 100%;
          height: 100%;
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-top-color: rgba(0,0,0,.5);
            position: absolute;
            bottom: -30px;
            left: 5px;
          }
          .close {
            position: absolute;
            right: -30px;
            top: -30px;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }

  }
</style>