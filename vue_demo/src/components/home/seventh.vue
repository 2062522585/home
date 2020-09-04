<template>
	<div class="seventh">
		<h2><strong>常用链接</strong></h2>
		<ul>
			<li v-for="item in $store.state.home.sevnthArr" :key="item.id">
				<img :src="item.img" />
				<h4>{{item.kw}}</h4>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.seventh{
		text-align: left;
	}
	.seventh h2 {	
		font-size: 26px;
		color: #000000;
		margin: 57px 85px;
	}

	.seventh ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		background-color: #f2f2f2;
		padding: 0 10%;
	}

	.seventh ul li {
		width: 28.2%;
		list-style: none;
		margin: 30px auto;
		background-color: white;
	}

	.seventh ul li:hover {
		transform: translateZ(0) scale(1.02);
		box-shadow: -6px 0 #f2f2f2, 6px 0 #f2f2f2, 0 7px 12px -3px rgba(0, 0, 0, .17);

	}
</style>
