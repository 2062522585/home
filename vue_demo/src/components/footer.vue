<template>

	<div class="footer">
		<el-card class="box-card" shadow="never" v-for="item in 4">
			<i class="el-icon-warning-outline"> 常用链接</i>
			<div v-for="item in firArr" class="text item">
				{{item}}
			</div>
		</el-card>
	<el-row>
			<span @click="weibo(mywb)"><el-button circle><img :src="fArr[0]" alt=""/></el-button><span>微博</span></span>
			<span  @click="weixin"><el-button circle><img :src="fArr[1]" alt="" /></el-button><span>微信</span></span>
		</el-row>
		<router-view></router-view>
		<p class="end">© Inter IKEA Systems B.V 1999-2020</p>
		<div class="wrap">
			<el-link :underline="false">隐私政策</el-link>
			<el-link :underline="false">缺陷披露政策</el-link>
			<el-link :underline="false">使用条款</el-link>
			<el-link :underline="false">上海工商</el-link>
			<el-link :underline="false">沪公网安备 31010402001069号</el-link>
			<el-link :underline="false">沪ICP 备17055232 号-1</el-link>
		</div>

	</div>
</template>

<script>
	import f_a from '../../public/img/home/f_a.png';
	import f_b from '../../public/img/home/f_b.png';
	export default {
		data() {
			return {
				firArr: ["《家居指南》及手册", "宜家家居APP", "本地商场", "在线设计工具", "宜家俱乐部", "宜家对公业务", "瑞典美食"],
				fArr: [f_a, f_b],
				mywb:"http://weibo.com/p/1006061785749160?is_all=1"
			}
		},
		methods:{
			weibo(a){
				window.location.href = a;
			},
			weixin(){
				this.$router.push({path:'/share'})
			}
		}
	}
</script>

<style scoped="scoped">
	.footer {
		display: flex;
		flex-wrap: wrap;
		background-color: #0058a3;
		color: #FFFFFF;
		font-size: 16px;
		text-align: left;
	}

	.text {}

	i {
		font-size: 20px;
	}

	.item {
		padding: 5px 0;
	}

	.item:not(:first-child):hover {
		text-decoration: underline;
	}

	.item:nth-child(2) {
		margin-top: 20px;
	}

	.footer .el-card.is-always-shadow,
	.el-card.is-hover-shadow:focus,
	.el-card.is-hover-shadow:hover {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0) !important;
		
	}

	.el-card {
		border: none;
		box-shadow: rgba(0, 0, 0, 0);
		background-color: #0058a3;
		color: #FFFFFF;
	}
	.el-card:first-child{
		padding-left: 48px;
	}
	.box-card>div {
		margin-top: 20px;
	}

	.box-card {
		margin: 50px 20px 0 0;
		width: 22%;
	}
	.el-card__body {
	    padding: 55px;
	}
	.el-row {
		width: 13%;
		margin: 50px 43%;
		vertical-align: middle;
	}

	.el-row span {
		margin: 0 5px 10px;
		display: inline-block;
		cursor: pointer;
	}

	.el-row span:hover {
		text-decoration: underline;
	}

	.el-button.is-circle {
		padding: 2px;
	}


	.el-button img {
		width: 24px;
	}

	.end {
		margin: 0 42%;
		font-size: 12px;
		width: 100%;
	}
	.wrap{
		width: 100%;
		margin:10px 28% 50px;
	}
	.el-link.el-link--default{
		color: white;
		font-size: 12px;
	}
	.el-link:not(:first-child)::before{
		content: "|";
		margin: 0 5px;
	}
	.el-link.el-link--default:hover {
	   text-decoration: underline;
		color: white;
	}
</style>
