<template>
	<div class="fifth">
		<h2><strong>热销分类</strong></h2>
		<ul >
			<li v-for="item in mysrc">
				<img :src="item"/>
			</li>
		</ul>
		<btn>{{msg}}</btn>
	</div>
</template>

<script>
	import btn from './btn_white.vue';
	export default {
		data(){
			return {
				mysrc:"",
				message:"",
				msg:'更多产品分类'
			}
		},
		components:{
			btn
		},
		created(){
			this.mysrc = this.$store.state.home.fifArr
		},
		methods: {
			open() {
				this.$message('更多期待');
				// router.push(path   query:555 )
			},
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
</style>
