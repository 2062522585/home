<template>
	<div id="app">
		<mynav v-if="keepShow"></mynav>
		<router-view></router-view>
	</div>
</template>

<script>
	import mynav from './components/nav.vue'
	export default {
		components: {
			mynav
		},
		data:function(){
			return {
				keepShow:true
			}
		},
		watch:{
			"$route.path":function(){
				if(this.$route.path == "/userlogin" || this.$route.path == "/register" || this.$route.path == "/adlogin" || this.$route.path == "/admin"){
					this.keepShow = false;
				}else{
					this.keepShow = true;
				}
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		// text-align: center;
		color: #2c3e50;
		margin: 0 auto;
	}

	.nav {
		width: 90%;
		margin: 0 auto;
	}

	a {
		text-decoration: none;
		color: rgb(64, 122, 177);
	}
</style>
