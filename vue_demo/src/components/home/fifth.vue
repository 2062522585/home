<template>
	<div class="fifth">
		<h2><strong>热销分类</strong></h2>
		<ul >
			<li v-for="item in mysrc">
				<img :src="item"/>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				mysrc:""
			}
		},
		created(){
			this.mysrc = this.$store.state.home.fifArr
		}
	}
</script>

<style>
	.fifth h2{
		font-size: 26px;
		text-align: left;
		color: #000000;
		margin: 30px 65px;
	}
	.fifth ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.fifth ul li{
		width: 33%;
		list-style: none;
	}
</style>
