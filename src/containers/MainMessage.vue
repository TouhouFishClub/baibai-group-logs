<template>
  <v-container fluid fill-height>
    <v-layout row justify-center align-center>
      <v-flex shrink>
        {{$store.state.actionGroupId}}
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn href="" icon large target="_blank" v-on="on">
              <v-icon large>code</v-icon>
            </v-btn>
          </template>
          <span>Source</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "main-message"
  }
</script>

<style scoped>

</style>