<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Baibai Group Logs</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon @click="changeDarkTheme">
      <v-icon>{{$store.state.isDark ? 'wb_sunny' : 'brightness_2'}}</v-icon>
    </v-btn>
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