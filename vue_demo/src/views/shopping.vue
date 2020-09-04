<template>

	<div class="goods">
		<a href="#">
			<p @click="goback">返回</p>
		</a>
		<div class="div">
			<lunbo></lunbo>
			<submitshopping></submitshopping>
		</div>
		<div></div>
	</div>
</template>

<script>
	import lunbo from "../components/shop/lunbo"
	import submitshopping from "../components/shop/submitshopping"
	export default {
		components: {
			lunbo,
			submitshopping
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.div {
		display: flex;
	}
</style>
