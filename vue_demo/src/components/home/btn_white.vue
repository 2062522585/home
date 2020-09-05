<template>
	<div>
	<el-button :plain="true" @click="open"><slot></slot><i>&nbsp;&nbsp;&gt;</i></el-button>
	</div>
</template>

<script>
	export default {
		// props:['msg'],
		methods:{
			open() {
				this.$message('更多期待');
			}
		}
	}
</script>

<style scoped="scoped">
	.el-button{
		margin: 0 auto ;
		border: 1px solid #407ab1;
		color: #407ab1;
	}
	.el-button.is-plain:focus, .el-button.is-plain:hover{
		background-color: #407ab1;
		color: white;
	}
	.el-button:hover i{
		display: inline-block;
		transform: translateX(10px);
	}
</style>
