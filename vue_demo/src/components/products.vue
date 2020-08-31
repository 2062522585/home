<template>
	<div>
		<ul v-for="item in productArr" :key="item.id">
			<li>
				<img src="item.myimg" alt="">
			</li>
			<li>{{item.brand}}</li>
			<li>{{item.name}}</li>
			<li>{{item.price}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		created(){
			this.$http.get('',{
				params:{
					
				}
			}).then(res => {
				this.productArr = res.data;
			}).catch(e => {
				console.log(e);
			})
		},
		data:function(){
			return {
				productArr:[]
			}
		}
	}
</script>

<style scoped="scoped">
	li{
		list-style: none;
	}
	
	ul{
		display: inline-block;
	}
</style>
