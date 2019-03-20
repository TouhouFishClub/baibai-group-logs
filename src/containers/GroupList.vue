<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    clipped
    fixed
    app
  >
    <v-list two-line>
      <template v-for="(group, index) in groupInfo">
        <v-list-tile
          :key="index"
          avatar
          @click=""
        >
          <v-list-tile-avatar>
            <img :src="group.avatar_url">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="group.group_name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="group.group_id"></v-list-tile-sub-title>
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
        ],
        groupInfo: [

        ]
      }
    },
    mounted() {
      this.$axios.get('http://flanb.msharebox.com:10086/get_group_list')
        .then(response => {
          let res = response.data
          if(res.status === 'ok'){
            this.groupInfo = res.data.map(d => Object.assign({avatar_url: `http://p.qlogo.cn/gh/${d.group_id}/${d.group_id}/100`}, d))
          } else {
            console.log('请求失败')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>