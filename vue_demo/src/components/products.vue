<template>
	<div>
		<router-link to="/shopping">
		<ul v-for="item in productArr" :key="item.id" :kw="keyword" @click="getId(item.id)">
			<li>
				<img :src="item.myimg" alt="">
			</li>
			<li>{{item.brand}}</li>
			<li>{{item.name}}</li>
			<li>{{item.id}}</li>
			<li>&yen;{{item.price}}</li>
		</ul>
		</router-link>
		
	</div>
</template>

<script>
	export default {
		props:['kw'],
		data(){
			return {
				productArr:[],
				keyword:"",
			}
		},
		created(){
			this.keyword = this.kw
			this.$http.get('/getpro',{
				params:{
					keyword:this.keyword
				}
			}).then(res => {
				this.productArr = res.data;
				// console.log(this.productArr);
				
			}).catch(e => {
			})
		},
		methods:{
			getId(num){
				this.$emit("myevent",num)
			}
		}
	}
</script>

<style scoped="scoped">
	div{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	div a{
		display: flex;
		flex-wrap: wrap;
		text-decoration: none;
		color: #000000;
	}
	li{
		list-style: none;
		width: 100%;
		text-align: left;
		margin-top: 10px;
	}
	li:hover{
		cursor: pointer;
	}
	ul:hover li:first-child{
		transform:scale(1.02);
		overflow: hidden;
	}
	li:hover+li:nth-child(2){
		text-decoration: underline;
	}
	li:nth-child(2){
		font-weight: 700;
	}
	li:nth-child(3){
		font-size: 14px;
	}
	li:last-child{
		font-size: 24px;
	}
	ul{	
		width: 25%;
	}
	img{
		width: 100%;
	}
</style>
