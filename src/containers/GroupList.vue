<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    clipped
    fixed
    app
    ref="drawer"
  >
    <v-list two-line>
      <template v-for="(group, index) in groupInfo">
        <v-list-tile
          :key="index"
          ripple
          avatar
          @click="selectGroup(group)"
        >
          <v-list-tile-avatar>
            <img :src="group.avatar_url">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="group.group_name" :class="group.group_id == $store.state.actionGroupId ? 'blue--text': ''"></v-list-tile-title>
            <v-list-tile-sub-title v-html="group.group_id"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset ></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { HOST } from "../../global.config"
	import { mapState } from 'vuex'
  export default {
    name: "group-list",
    data () {
      return {
        groupInfo: [

        ]
      }
    },
		computed: {
			...mapState([
				'initNotify'
			])
		},
    methods: {
      selectGroup(group) {
      	console.log(group)
        this.$store.dispatch('changeGroup', Object.assign({
          isMobile: this.$refs.drawer.isMobile
        }, group))
      },
      init() {
				this.$axios.get(`${HOST}/get_group_list`)
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
    },
    mounted() {
    	this.init()
    },
		watch: {
			initNotify(val, oldVal){
				this.init()
			}
		}
  }
</script>

<style scoped>

</style>