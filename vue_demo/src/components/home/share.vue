<template>
	<div class="outer">
		<h1>把宜家带在身边</h1>
		<p>扫码关注宜家的公众号和<span>微博</span>，更多家居灵感和优惠资讯触手可及。</p>
		<div class="img">
			<img :src="imgArr[0]" alt="" />
			<img :src="imgArr[1]" alt="" />
		</div>
		<div class="mybtn">
		 <el-button type="primary" plain @click="back">返回首页</el-button>
		 </div>
	</div>
</template>

<script>
	import share_a from '../../../public/img/home/share-a.webp'
	import share_b from '../../../public/img/home/share-b.webp'
	export default {
		data(){
			return {
				imgArr:[share_a,share_b]
			}
			
		},
		
		methods:{
			back(){
				this.$router.push({path:'/'})
			}
		}
	}
</script>

<style scoped="scoped">
	.outer{
		margin: 50px auto;
		text-align: center;
	}
	p{
		margin: 20px auto;
	}
	img{
		width: 30%;
	}
	.mybtn{
		/* margin-bottom: 50px; */
	}
</style>
