<template>
  <v-content>
    <v-layout align-space-between justify-space-between column fill-height>
      <v-flex>
        bbb
      </v-flex>
      <v-flex flex-content-height>
        aaa
      </v-flex>
    </v-layout>
    <!--<v-container fluid fill-height>-->
      <!--<v-layout row>-->
        <!--aaa-->
      <!--</v-layout>-->
      <!--<v-layout row justify-center align-center>-->
        <!--<v-flex shrink>-->
          <!--{{$store.state.actionGroupId}}-->
          <!--<v-tooltip right>-->
            <!--<template v-slot:activator="{ on }">-->
              <!--<v-btn href="" icon large target="_blank" v-on="on">-->
                <!--<v-icon large>code</v-icon>-->
              <!--</v-btn>-->
            <!--</template>-->
            <!--<span>Source</span>-->
          <!--</v-tooltip>-->
        <!--</v-flex>-->
      <!--</v-layout>-->
    <!--</v-container>-->
  </v-content>
</template>

<script>
  export default {
    name: "main-container",
  }
</script>

<style scoped>
  .flex-content-height {
    max-height: 180px;
    min-height: 100px;
    border-top: 1px solid darkgrey;
    padding: 15px;
  }

</style>