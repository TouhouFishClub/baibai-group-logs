<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    clipped
    fixed
    app
  >
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile
          :key="item.title"
          avatar
          @click=""
        >
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset ></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "group-list",

    data () {
      return {
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "aaaaaaa"
          }
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>