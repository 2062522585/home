<template>
	<div class="second">
		<div class="sec_up">
			<img :src="mysrc" />
			<div class="sec_right">
				<h3><strong>为所有人而设计</strong></h3>
				<p>我们认为，只有价格亲民，一款产品才真正称得上好的设计。因此，我们始终以尽可能低的价格出售产品。</p>
			</div>
		</div>
		<div class="sec_down">
			<product :kw="keyword"  @myevent="getValue"></product>
			<btn>更多超值好物</btn>
		</div>
	</div>
</template>

<script>
	import myimg from '../../../public/img/home/third.gif';
	import product from '@/components/products.vue'
	import btn from './btn_white.vue';
	export default {
		data() {
			return {
				mysrc: myimg,
				keyword: '价格',
			}
		},
		components: {
			product,
			btn
		},
		methods:{
			getValue(val){
				console.log(val);
			}
		},
	}
</script>

<style scoped="scoped">
	.sec_up {
		width: 90%;
		display: flex;
		margin: 65px auto;
	}

	.sec_up img {
		width: 45%;
	}

	.sec_right {
		width: 47%;
		text-align: left;
		margin-left: 40px;
	}
	.sec_down{
		margin:50px auto ;
	}
	.sec_down div:last-child{
		margin: 50px 43%;
	}
</style>
