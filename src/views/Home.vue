<template>
  <v-app id="inspire" :dark="$store.state.isDark">
    <!--group list-->
    <GroupList></GroupList>
    <!--top bar-->
    <TopBar></TopBar>
    <!--main container-->
    <MainContainer></MainContainer>
  </v-app>
</template>

<script>
  import GroupList from '@/containers/GroupList'
  import TopBar from '@/containers/TopBar'
  import MainContainer from '@/containers/MainContainer'
  export default {
    components: {
      GroupList,
      TopBar,
      MainContainer,
    },
  }
</script>
