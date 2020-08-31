<template>
	<div class="sixth">
		<div class="sixth_up">
			<h2><strong>宜家明星系列</strong></h2>
			<ul>
				<li v-for="item in $store.state.home.sixArr" :key="item.id">
					<img :src="item.img" />
					<h4>{{item.sort}}</h4>
					<p>{{item.info}}</p>
					<a href="#">了解更多<i>&nbsp;&nbsp;&gt;</i></a>
				</li>
				
			</ul>
		</div>
		<div class="sixth_down"></div>
	</div>
</template>

<script>
	export default {
		
			
	}
</script>

<style scoped="scoped">
	.sixth_up {
		text-align: left;
		}
	 h2{
		font-size: 26px;
		color: #000000;
		margin: 25px 85px -20px;
	}
	.sixth_up ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 80px;
	}

	.sixth_up ul li {
		list-style: none;
		margin-top: 50px;
		font-size: 16px;
	}
	.sixth_up ul li h4{
		margin: 10px 0 0;
	}
	.sixth_up ul li p{
		width: 90%;
		margin: 3px 0;
	}
	.sixth_up ul li img {
		width: 85%;
	}
	.sixth_up ul li a{
		color: #407ab1;
		margin-top: -10px;
	}
	.sixth_up ul li:nth-child(3){
		width: 31%;
	}
	.sixth_btn {
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
