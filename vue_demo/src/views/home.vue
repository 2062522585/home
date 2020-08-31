<template>
	<div class="home">
		<banner></banner>
		<div class="carousel__gradient-divider"></div>
		<div class="wrap">
			<div class="first">
				<div v-for="item in $store.state.home.secArr">
					<img :src="item" />
				</div>
			</div>
			<hr>
			<second></second>
			<hr>
			<third></third>
			<hr>
			<fourth></fourth>
			<hr>
			<fifth></fifth>
			<hr>
			<sixth></sixth>
			<hr>
			<seventh></seventh>
			<!-- <hr> -->
			<eigth></eigth>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
	import banner from '../components/home/banner.vue';
	import second from '../components/home/second.vue';
	import third from '../components/home/third.vue';
	import fourth from '../components/home/fourth.vue';
	import fifth from '../components/home/fifth.vue';
	import sixth from '../components/home/sixth.vue';
	import seventh from '../components/home/seventh.vue';
	import eigth from '../components/home/eigth.vue';
	import myfooter from '../components/home/footer.vue';
	export default {
		name: 'Home',
		components: {
			banner,
			second,
			third,
			fourth,
			fifth,
			sixth,
			seventh,
			eigth,
			myfooter
		},
		created() {
			// console.log(this.$store.state.home.secArr);
		}
	}
</script>
<style scoped="scoped">
	/* *{
		margin: 0;
		padding: 0;
	} */
	.wrap {
		width: 1280px;
		margin: 0 auto;
	}

	.carousel__gradient-divider {
		height: 12px;
		margin-left: 1rem;
		margin-right: 1rem;
		padding-top: 1.5rem;
		box-shadow: 0 12px 13px -6px rgba(0, 0, 0, .25);
	}

	.first {
		margin: 65px auto;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.first>div {
		width: 368px;
	}

	.first img {
		width: 100%;
	}
	hr{
		background-color: #ccc;
	}
</style>
