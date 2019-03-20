<template>
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
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "main-container"
  }
</script>

<style scoped>

</style>