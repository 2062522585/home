<template>
	<div class="banner">
		 <el-carousel :interval="3000" arrow="always">
		    <el-carousel-item v-for="item in $store.state.home.bannerArr " :key="item.id">
			  <img :src="item.img" alt="" >	  
		    </el-carousel-item>
		  </el-carousel>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.banner{
		width: 1280px;
		margin: 50px auto;
	} 
	 .banner img{
		 width: 100%;
	 }
	/* .banner >>> .el-carousel__container{
		 height: 700px;
		 font-size: 50px;
	 } */
	.banner .el-carousel__container{
		 height: 700px;
		 /* font-size: 50px; */
	 }
	 .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	 .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
