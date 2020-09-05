<template>
	<div class="four_wrap">
		<h2><strong>人气新品</strong></h2>

		<div class="fourth">
			<div class="fourth_left">
				<img :src="mysrc" />
				<p>充满趣味和冒险精神的全新JÄTTELIK 耶特里克 系列，让孩子们可以在自己的房间里拥有一方小小的恐龙世界。</p>
			</div>
			<div class="fourth_right">
				<img :src="imgup" class="img_up" />
				<img :src="imgdown" class="img_down" />
				<div class="mybtn">
					<btn>更多当季新品</btn>
				</div>
				
			</div>
		</div>
		
		<div class="fourProduct">
			<product :kw="keyword" @myevent="getValue"></product>
		</div>
	</div>
</template>

<script>
	import fourth_a from '../../../public/img/home/fourth_a.webp'
	import fourth_b from '../../../public/img/home/fourth_b.webp'
	import fourth_c from '../../../public/img/home/fourth_c.webp'
	import product from '@/components/products.vue'
	import btn from './btn_white.vue';
	export default {
		data() {
			return {
				mysrc: fourth_a,
				imgup: fourth_b,
				imgdown: fourth_c,
				keyword:'儿童',
				
			}
		},
		components:{
			product,
			btn
		},
		methods:{
			getValue(val){
				// console.log(val);
			}
		},
	}
</script>

<style scoped="scoped">
	.fourth {
		width: 90%;
		margin: 30px auto;
		display: flex;
		justify-content: center;
		text-align: left;
	}

	.four_wrap h2 {
		font-size: 26px;
		color: #000000;
		text-align: left;
		margin: 50px 65px;
	}

	.fourth img {
		width: 97%;
	}

	.fourth_left,
	.fourth_right {
		width: 50%;
	}

	.fourth_left p {
		margin: 32px auto;
	}

	.img_down {
		margin-top: 25px;
	}

	.mybtn{
		margin: 27px 37%;
	}
	.fourProduct{
		margin-bottom: 50px;
	}
</style>
