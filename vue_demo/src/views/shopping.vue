<template>

	<div>
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
		data:function(){
			return {
				arr:[]
			}
		}
	}
</script>

<style scoped>
	.div {
		display: flex;
	}
</style>
