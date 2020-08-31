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
						<el-button :plain="true" @click="open">所有房间<i>&nbsp;&nbsp;&gt;</i></el-button>
						<br>
						<br>
						<br>
						<el-button :plain="true" @click="openVn">更多家居创意<i>&nbsp;&nbsp;&gt;</i></el-button>
					</div>
				</li>
			</ul>
		</div>
		<div class="third_down"></div>
	</div>
</template>

<script>
	export default {
		methods: {
			open() {
				this.$message('更多期待');
			},

			openVn() {
				const h = this.$createElement;
				this.$message({
					message: h('p', null, [
						h('span', null, '精彩继续 '),
						h('i', {
							style: 'color: teal'
						}, '更多期待')
					])
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.third_up h2{
		text-align: left;
		font-size: 26px;
		color: #000000;
		margin: 25px 85px -20px;
	}
	.third_up ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		/* padding-top:-20px; */
	}

	.third_up ul li {
		list-style: none;
		margin-top: 50px;
		/* width: 30%; */
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
	.el-button:hover i{
		display: inline-block;
		transform: translateX(10px);
	}

	



	
</style>
