<template>
	<div id="app">
		<mynav></mynav>
		<router-view></router-view>
	</div>
</template>

<script>
	import mynav from './components/nav.vue'
	export default {
		components: {
			mynav
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
