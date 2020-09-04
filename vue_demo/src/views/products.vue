<template>
	<div class="box1">
		<router-link to="/">返回主页</router-link>
		<h1>"{{$route.query.keyword}}"</h1>
		<div class="sort">
			<div class="navtop">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-submenu index="1">
						<template slot="title">排序方式</template>
						<el-menu-item index="1-1">
							价格：由低到高<input type="radio" name="sort" value="high" checked="checked" v-model="gender">
						</el-menu-item>
						<el-menu-item index="1-2">
							价格：由高到低<input type="radio" name="sort" value="low" v-model="gender">
						</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">尺寸</template>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">分类筛选</template>
					</el-submenu>
					<el-menu-item index="4">材质</el-menu-item>
					<el-submenu index="5">
						<template slot="title">筛选价格</template>
						<el-menu-item index="5-1">
							全部<input type="radio" name="price" value="0" v-model="price" checked="checked">
						</el-menu-item>
						<el-menu-item index="5-2">
							1000以内<input type="radio" name="price" value="1" v-model="price">
						</el-menu-item>
						<el-menu-item index="5-3">
							1000~3000<input type="radio" name="price" value="2" v-model="price">
						</el-menu-item>
						<el-menu-item index="5-4">
							3000~5000<input type="radio" name="price" value="3" v-model="price">
						</el-menu-item>
						<el-menu-item index="5-5">
							5000以上<input type="radio" name="price" value="4" v-model="price">
						</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">颜色</template>
						<el-menu-item index="6-1">
							全部<input type="radio" name="color" value="全部" v-model="color" checked="checked">
						</el-menu-item>
						<el-menu-item index="6-2">
							白色
							<input type="button" class="L0" style="background-color: white;">
							<input type="radio" name="color" value="白色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-3">
							黑色
							<input type="button" class="L0" style="background-color: black;">
							<input type="radio" name="color" value="黑色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-4">
							红色
							<input type="button" class="L0" style="background-color: red;">
							<input type="radio" name="color" value="红色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-5">
							灰色
							<input type="button" class="L0" style="background-color: gray;">
							<input type="radio" name="color" value="灰色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-6">
							米黄色
							<input type="button" class="L0" style="background-color: rgb(244,243,215);">
							<input type="radio" name="color" value="米黄色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-7">
							蓝色
							<input type="button" class="L0" style="background-color: blue;">
							<input type="radio" name="color" value="蓝色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-8">
							天蓝色
							<input type="button" class="L0" style="background-color: skyblue;">
							<input type="radio" name="color" value="天蓝色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-9">
							多色
							<input type="button" class="L0" style="background-image: linear-gradient(-90deg, red, yellow,blue);">
							<input type="radio" name="color" value="多色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-10">
							绿色
							<input type="button" class="L0" style="background-color: green;">
							<input type="radio" name="color" value="绿色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-11">
							褐色
							<input type="button" class="L0" style="background-color: brown;">
							<input type="radio" name="color" value="褐色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-12">
							粉红色
							<input type="button" class="L0" style="background-color: pink;">
							<input type="radio" name="color" value="粉红色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-13">
							黄色
							<input type="button" class="L0" style="background-color: yellow;">
							<input type="radio" name="color" value="黄色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-14">
							淡紫色
							<input type="button" class="L0" style="background-color: lavender;">
							<input type="radio" name="color" value="淡紫色" v-model="color">
						</el-menu-item>
						<el-menu-item index="6-15">
							橙色
							<input type="button" class="L0" style="background-color: orange;">
							<input type="radio" name="color" value="橙色" v-model="color">
						</el-menu-item>
					</el-submenu>
					<el-menu-item index="7">特征</el-menu-item>
					<el-menu-item index="5">图样</el-menu-item>
					<el-menu-item index="6">形成</el-menu-item>
					<el-menu-item index="7">更多筛选</el-menu-item>
				</el-menu>
			</div>
		</div>
		<ul v-for="item in arr" :key="item.id" @click="handleShow(item.id)">
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
			handleSelect(key, keyPath) {
				// console.log(key, keyPath);
			},
			getProduct(value){
				this.$http.get('/selectproduct',{
					params:{
						keyword:value
					}
				}).then(res => {
					this.productArr = res.data.sort(function(a,b){return a.price-b.price});
					this.arr = this.productArr
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
					case "high":this.arr.sort(function(a,b){return a.price-b.price});break;
					case "low":this.arr.sort(function(a,b){return b.price-a.price});break;
				}
			},
			"price":function(){
				this.arr = [];
				let j = 0;
				switch(this.price){
					case "0":this.arr = this.productArr;break;
					case "1":for(let i = 0; i < this.productArr.length; i++){
						if(this.productArr[i].price < 1000){
							this.arr[j] = this.productArr[i];
							j++;
						}};
						break;
					case "2":for(let i = 0; i < this.productArr.length; i++){
						if(this.productArr[i].price > 1000 && this.productArr[i].price < 3000){
							this.arr[j] = this.productArr[i];
							j++;
						}};
						break;
					case "3":for(let i = 0; i < this.productArr.length; i++){
						if(this.productArr[i].price > 3000 && this.productArr[i].price < 5000){
							this.arr[j] = this.productArr[i];
							j++;
						}};
						break;
					case "4":for(let i = 0; i < this.productArr.length; i++){
						if(this.productArr[i].price > 5000){
							this.arr[j] = this.productArr[i];
							j++;
						}};
						break;
				}
			},
			"color":function(){
				this.arr = [];
				for(let i = 0;i < this.productArr.length;i++){
					// if(this.productArr[i].name.)
				}
			}
		},
		data:function(){
			return {
				productArr:[],
				gender:"high",
				closeimg:close,
				activeIndex: "1",
				activeIndex2: "1",
				price:"0",
				arr:[],
				color:"全部"
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
	
	h1{
		width: 200px;
	}
	
	.box1{
		width: 90%;
		margin: 0 auto;
	}
	
	.L0{
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
</style>
