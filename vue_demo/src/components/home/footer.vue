<template>
	
	<div class="footer">
		<el-card class="box-card" shadow="never">
			<i class="el-icon-warning-outline"> 常用链接</i>
		  <div v-for="item in firArr" class="text item">
		    {{item}}
		  </div>
		</el-card>
		<el-card class="box-card" shadow="never">
			<i class="el-icon-chat-dot-square">&nbsp;&nbsp;客户服务</i>
		  <div v-for="item in firArr" class="text item">
		     {{item}}
		  </div>
		</el-card>
		<el-card class="box-card" shadow="never">
			<i class="el-icon-office-building">这既是宜家</i>
		  <div v-for="item in firArr" class="text item">
		     {{item}}
		  </div>
		</el-card>
		<el-card class="box-card" shadow="never">
			<i class="el-icon-s-order">新闻室</i>
		  <div v-for="item in firArr" class="text item">
		     {{item}}
		  </div>
		</el-card>
		<el-row>
		  <el-button  circle><img :src="fArr[0]" alt=""/></el-button><span>微博</span>
		  <el-button  circle><img :src="fArr[1]" alt=""/></el-button><span>微信</span>
		  <el-button></el-button><span>优酷</span> 
		</el-row>
		<p class="end">© Inter IKEA Systems B.V 1999-2020</p>
	</div>
</template>

<script>
	import f_a from '../../../public/img/home/f_a.png';
	import f_b from '../../../public/img/home/f_b.png';
	export default {
		data(){
			return {
				firArr:["《家居指南》及手册","宜家家居APP","本地商场","在线设计工具","宜家俱乐部","宜家对公业务","瑞典美食"],
				fArr:[f_a,f_b]
			}
		}
	}
</script>

<style scoped="scoped">
	
	.footer{
		display: flex;
		flex-wrap: wrap;
		background-color: #0058a3;
		 color: #FFFFFF;
		 font-size: 16px;
		 text-align: left;
		}
	 .text {

	  }
	i{
		font-size: 24px;
	}
	  .item {
	    padding: 5px 0;
	  }
	 .item:not(:first-child):hover{
		 text-decoration: underline;
	 }
	  .item:nth-child(2){
		  margin-top: 20px;
	  }
	.footer .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
	    box-shadow: 0 2px 12px 0 rgba(0,0,0,0) !important;
	}
	.el-card {
	    border:none;
		box-shadow: rgba(0,0,0,0);
	    background-color: #0058a3;
	    color: #FFFFFF;
	}
	.box-card>div{
		margin-top: 20px;
	}
	  .box-card {
		margin-top: 50px;
	    width: 25%;
	  }
	  .el-row{
		  width: 100%;
		   margin: 30px 42%;
		   vertical-align: middle;
	  }
	  .el-row span{
		  margin:0 5px 10px;
		  cursor: pointer;
	  }
	  .el-row span:hover{
		  text-decoration:underline;
	  }
	  .el-button.is-circle{
		  padding: 2px;
	  }
	  .el-button:last-of-type{
		  display: none;
	  }
	  .el-button img{
		  width: 24px;
	  }
	  .end{
		  margin: 20px auto;
		  font-size: 12px;
	  }
</style>
