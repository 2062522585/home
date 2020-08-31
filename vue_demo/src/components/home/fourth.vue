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
				<div class="btn">
					<el-button :plain="true">更多当季新品<i>&nbsp;&nbsp;&gt;</i></el-button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import fourth_a from '../../../public/img/home/fourth_a.webp'
	import fourth_b from '../../../public/img/home/fourth_b.webp'
	import fourth_c from '../../../public/img/home/fourth_c.webp'
	export default {
		data() {
			return {
				mysrc: fourth_a,
				imgup: fourth_b,
				imgdown: fourth_c
			}

		}
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
		margin: 30px 65px;
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

	.btn {
		margin: 32px 38%;
	}
</style>
