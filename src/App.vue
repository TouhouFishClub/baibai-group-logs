<template>
  <v-app id="inspire" :dark="$store.state.isDark">
    <!--group list-->
    <GroupList></GroupList>
    <!--top bar-->
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Baibai Group Logs</v-toolbar-title>

      <v-spacer></v-spacer>
      <!--<v-btn icon>-->
        <!--<v-icon>wb_sunny</v-icon>-->
      <!--</v-btn>-->
      <v-btn icon @click="changeDarkTheme">
        <v-icon>{{$store.state.isDark ? 'wb_sunny' : 'brightness_2'}}</v-icon>
      </v-btn>
    </v-toolbar>
    <!--main container-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/qxQWda" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import GroupList from '@/containers/GroupList'
  export default {
    data: () => ({
      drawer: null,
      isDark: false
    }),
    components: {
      GroupList,
    },
    props: {
      source: String
    },
    methods: {
      toggleDrawer() {
        this.$store.commit('tapDrawer')
      },
      changeDarkTheme() {
        this.$store.commit('tapTheme')
        // this.isDark = !this.isDark
      }
    },
    mounted() {
      // console.log(this.$store.state)
    }
  }
</script>