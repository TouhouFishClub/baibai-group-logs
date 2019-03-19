<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    clipped
    fixed
    app
  >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action @click="">
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "group-list",
    mounted() {
    }
  }
</script>

<style scoped>

</style>