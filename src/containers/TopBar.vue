<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title v-html="$store.state.titleName"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn icon target="_blank" v-on="on" @click="$store.commit('updateMsg', Date.now())">
          <v-icon>refresh</v-icon>
        </v-btn>
      </template>
      <span>刷新</span>
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn icon target="_blank" v-on="on" @click="changeDarkTheme">
          <v-icon>{{$store.state.isDark ? 'wb_sunny' : 'brightness_2'}}</v-icon>
        </v-btn>
      </template>
      <span>{{$store.state.isDark ? '关闭da♂rk模式' : '开启da♂rk模式'}}</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
  export default {
    name: "top-bar",
    methods: {
      toggleDrawer() {
        this.$store.commit('tapDrawer')
      },
      changeDarkTheme() {
        this.$store.commit('tapTheme')
      }
    },
  }
</script>

<style scoped>

</style>