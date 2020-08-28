<template>
  <div class="port">
    <v-menu
      offset-y
      top
    >
      <template v-slot:activator="{ on }">
        <v-btn
          depressed
          small
          outline
          color="primary"
          v-on="on"
        >
          {{ port }}
        </v-btn>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in ports"
          :key="index"
          @click="changePort(item)"
        >
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
	export default {
		name: "ChangePort",
    data() {
			return {
				ports: [],
        port: null,
      }
    },
    beforeMount() {
			this.init()
		},
    methods: {
			init() {
				this.getPorts()
      },
      getPorts() {
				this.$axios.get(`${this.$config.HOST}/get_ports`)
					.then(res => {
						if(res.data) {
							this.ports = res.data.ports
              this.port = res.data.port
            }
					})
      },
			changePort(port) {
				if(port == this.port) {
					return
        }
				this.$axios.get(`${this.$config.HOST}/set_port?p=${port}`)
          .then(res => {
          	if(res.data && res.data.result == 'ok') {
          		this.$store.dispatch('initSystem')
          		this.getPorts()
            }
          })
      }
    }
	}
</script>

<style scoped>
  .port {
    padding: 0 10px;
  }

</style>