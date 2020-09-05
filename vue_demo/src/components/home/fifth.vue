<template>
	<div class="fifth">
		<h2><strong>热销分类</strong></h2>
		<ul >
			<li v-for="item in imgArr" :key="item.id" @click="getVal(item.sort)">
				<img :src="item.myimg"/>
			</li>
		</ul>
		<div class="wrap_btn">
		<btn>{{msg}}</btn>
		</div>
	</div>
</template>

<script>
	import btn from './btn_white.vue';
	export default {
		data(){
			return {
				imgArr:[],
				msg:'更多产品分类',
				kw:""
			}
		},
		components:{
			btn
		},
		created(){
			this.$http.get('/getsort').then(res => {
				this.imgArr = res.data;
				// console.log(this.imgArr)
			}).catch(e => {
			})
		},
		methods:{
			getVal(a){
				this.kw = a;
				this.$router.push({
				path:"/products",
				 query:{
					 keyword:this.kw
				 }
				})
			}
		}
	}
</script>

<style>
	.fifth h2{
		font-size: 26px;
		text-align: left;
		color: #000000;
		margin: 50px 65px;
	}
	.fifth ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		margin-bottom: 80px;
	}
	.fifth ul li{
		width: 33%;
		list-style: none;
	}
	.fifth{
		margin-bottom: 80px;
	}
	.wrap_btn{
		margin: 50px 43%;
	}
</style>
