<template>
	<div class="third">
		<div class="third_up">
			<h2><strong>舒适空间，为生活充电</strong></h2>
			<ul>
				<li v-for="item in $store.state.home.thirdUpArr">
					<img :src="item" />
				</li>
				<li>
					<div class="third_btn">
						<btn>所有房间</btn>
						<br>
						<br>
						<br>
						<btn>更多家居创意</btn>
					</div>
				</li>
			</ul>
		</div>
		<div class="third_down">
			<products :kw="kw" @myevent="getValue"></products>
		</div>
	</div>
</template>

<script>
	import products from '../products.vue';
	import btn from'./btn_white.vue';
	export default {
		data(){
			return {
				kw:'家居',
				mydata:""
			}
		},
		components:{
			products,
			btn
		},
		methods:{
			getValue(val){
				console.log(val);
			}
		},
		mounted(){
			// this.mydata=this.$refs.getKw
			// console.log(this.$refs.getKw);
			// console.log(this.mydata);
		}
		
	}
</script>

<style scoped="scoped">
	
	.third_up h2{
		text-align: left;
		font-size: 26px;
		color: #000000;
		margin: 60px 10px -10px;
	}
	.third_up ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.third_up ul li {
		list-style: none;
		margin-top: 50px;
	}

	.third_up ul li:last-child {
		width: 30%;
	}

	.third_up ul li img {
		width: 85%;
	}

	.third_btn {
		width: 40%;
		position: relative;
		padding: 21%;
		margin-left: 12%;
	}
	
	.third_down{
		margin-bottom: 80px;
	}

	



	
</style>
