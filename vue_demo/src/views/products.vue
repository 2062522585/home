<template>
	<div class="box1">
		<h1>"{{$route.query.keyword}}"</h1>
		<div class="sort">
			<button @click="showSort">排序方式</button>
			<div class="sortbox">
				<img class="close" :src="closeimg" alt="" @click="close"><br>
				价格：由低到高<input type="radio" name="price" value="high" checked="checked" v-model="gender"><br>
				价格：由高到低<input type="radio" name="price" value="low" v-model="gender">
			</div>
			<button>尺寸</button>
			<button>分类筛选</button>
			<button>材质</button>
			<button>筛选价格</button>
			<button>颜色</button>
			<button>特征</button>
			<button>图样</button>
			<button>形成</button>
			<button>更多筛选</button>
		</div>
		<ul v-for="item in productArr" :key="item.id" @click="handleShow(item.id)">
			<li>
				<img :src="item.myimg" alt="">
			</li>
			<li>{{item.brand}}</li>
			<li>{{item.name}}</li>
			<li>￥{{item.price}}.00</li>
		</ul>
	</div>
</template>

<script>
	import close from "../assets/close.png"
	import Bus from '../js/bus.js';
	export default {
		mounted(){
			Bus.$on("getkey",(value)=>{
				this.getProduct(value);
			})
			Bus.$on("getValue",(value)=>{
				this.getProduct(value);
			})
			this.getProduct(this.$route.query.keyword);
		},
		methods:{
			getProduct(value){
				this.$http.get('/selectproduct',{
					params:{
						keyword:value
					}
				}).then(res => {
					this.productArr = res.data.sort(function(a,b){return a.price-b.price});
				}).catch(e => {
					console.log(e);
				})
			},
			handleShow(value){
				this.$router.push(`/shopping?id=${value}`);
			},
			showSort(){
				let div = document.querySelector(".sortbox");
				div.style.display = "block";
			},
			close(){
				let div = document.querySelector(".sortbox");
				div.style.display = "none";
			}
		},
		watch:{
			"gender":function(){
				switch(this.gender){
					case "high":this.productArr.sort(function(a,b){return a.price-b.price});break;
					case "low":this.productArr.sort(function(a,b){return b.price-a.price});break;
				}
			}
		},
		data:function(){
			return {
				productArr:[],
				gender:"high",
				closeimg:close
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
	
	img{
		width: 300px;
		height: 250px;
	}
	
	.sort{
		position: relative;
		display: flex;
		border-bottom: 1px solid black;
		padding: 30px 0;
	}
	
	button{
		background-color: rgb(245,245,245);
		width: 100px;
		height: 45px;
		border-radius: 50%;
		border: 0;
		margin-right: 10px;
	}
	
	h1{
		width: 100px;
	}
	
	.sortbox{
		display: none;
		position: absolute;
		width: 250px;
		height: 600px;
		right: 0;
		top: -200px;
		background-color: gray;
		text-align: left;
	}
	
	.close{
		width: 30px;
		height: 30px;
		position: relative;
		left: 215px;
		top: 5px;
		border-radius: 50%;
	}
	
	.box1{
		width: 90%;
		margin: 0 auto;
	}
</style>
