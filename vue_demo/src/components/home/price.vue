<template>
	<div class="outer">
		<h1>更低价格，更多值得</h1>
		<p>
			在宜家，我们始终相信，降低价格的前提要确保品质不受影响。因此，我们花费了大量时间寻找设计、生产和（平板）包装每件产品的最佳
			方法。最终，为每个人都省下一笔钱：宜家的生产成本降低了，提供的价格也更实惠了。小小的红色标签不仅仅意味着更实惠的价格，还象 征着宜家品牌以更低成本创造更多价值的持续追求，而消费者也将因此以更低价格获益更多。
		</p>
		<product :order="price" @myevent="getValue"></product>
	</div>
</template>

<script>
	import product from '@/components/products.vue'
	export default {
		data(){
			return {
				price:30
			}
		},
		components: {
			product
		},
		methods:{
			getValue(){
				
			}
		}
	}
</script>

<style scoped="scoped">
	p{
		width: 30%;
		margin: 0 auto;
	}
</style>
