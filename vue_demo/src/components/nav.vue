<template>
	<div class="nav">
		<div class="header">
			<div class="ikealogo">
				<a href="">
					<img src="../image/IKEA_logo.jpg" alt />
				</a>
			</div>
			<div class="navtop">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-submenu index="1">
						<template slot="title">活动</template>
						<el-menu-item index="1-1">9月特惠</el-menu-item>
						<el-menu-item index="1-2">每月会员特惠</el-menu-item>
						<el-menu-item index="1-3">更低价格</el-menu-item>
						<el-menu-item index="1-4">我们的低价优选</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">房间</template>
						<el-menu-item index="2-1">卧室</el-menu-item>
						<el-menu-item index="2-2">客厅</el-menu-item>
						<el-menu-item index="2-3">厨房</el-menu-item>
						<el-menu-item index="2-4">餐厅</el-menu-item>
						<el-menu-item index="2-5">儿童房</el-menu-item>
						<el-menu-item index="2-6">浴室</el-menu-item>
						<el-menu-item index="2-7">书房和办公室</el-menu-item>
						<el-menu-item index="2-8">门厅</el-menu-item>
						<el-menu-item index="2-9">户外</el-menu-item>
						<el-menu-item index="2-10">阳台</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">所有商品</template>
						<el-submenu index="3-1">
							<template slot="title">家具</template>
							<div @click="handleShow">
								<el-menu-item index="3-1-1">床</el-menu-item>
								<el-menu-item index="3-1-2">沙发</el-menu-item>
								<el-menu-item index="3-1-3">椅子</el-menu-item>
								<el-menu-item index="3-1-4">衣柜</el-menu-item>
								<el-menu-item index="3-1-4">书柜</el-menu-item>
								<el-menu-item index="3-1-4">抽屉柜</el-menu-item>
							</div>
						</el-submenu>
						<el-submenu index="3-2">
							<template slot="title">婴儿和儿童</template>
							<div @click="handleShow">
								<el-menu-item index="3-2-1">婴儿</el-menu-item>
								<el-menu-item index="3-2-2">儿童</el-menu-item>
							</div>
						</el-submenu>
						<el-submenu index="3-3">
							<template slot="title">装饰品</template>
							<div @click="handleShow">
								<el-menu-item index="3-3-1">时钟</el-menu-item>
								<el-menu-item index="3-3-2">镜子</el-menu-item>
								<el-menu-item index="3-3-3">布告板</el-menu-item>
								<el-menu-item index="3-3-4">纸品屋</el-menu-item>
								<el-menu-item index="3-3-4">家用香氛</el-menu-item>
								<el-menu-item index="3-3-4">节日装饰</el-menu-item>
							</div>
						</el-submenu>
						<el-submenu index="3-4">
							<template slot="title">灯具照明</template>
							<div @click="handleShow">
								<el-menu-item index="3-4-1">装饰性灯具</el-menu-item>
								<el-menu-item index="3-4-2">内置灯具</el-menu-item>
								<el-menu-item index="3-4-3">LED照明灯泡</el-menu-item>
							</div>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="4">灵感</el-menu-item>
					<el-menu-item index="5">新品</el-menu-item>
					<el-menu-item index="6">宜家对公业务</el-menu-item>
					<el-menu-item index="7">中文 | English</el-menu-item>
				</el-menu>
			</div>
			<div class="usercontent">
				<router-link to="/person" class="iconfont usericon">&#xe649;</router-link>
				<router-link to="/payfor" class="iconfont usericon">&#xe69a;</router-link>
				<router-link to="/userlogin" class="el-icon-bell usericon" id="aaa"></router-link>
			</div>
		</div>
		<div class="search">
			<div style="margin-top: 15px;">
				<el-input placeholder="你在找什么？" v-model="searchinput" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
				</el-input>
			</div>
		</div>
	</div>
</template>
<script>
	import Bus from '../js/bus.js';
	export default {
		data() {
			return {
				activeIndex: "1",
				activeIndex2: "1",
				searchinput: "",
				select: "",
			};
		},
		methods: {
			handleSelect(key, keyPath) {},
			handleShow(e) {
				if (this.$route.fullPath.replace(this.$route.fullPath.substring(this.$route.fullPath.indexOf("keyword") + 8), this.$route
						.query.keyword) == `/products?keyword=${e.target.innerHTML}`) {
					this.$router.go(0);
				} else {
					this.$router.push(`/products?keyword=${e.target.innerHTML}`);
					Bus.$emit("getValue", e.target.innerHTML);
				}
			},
			handleSearch() {
				if (this.searchinput == "") {
					this.$router.go(0);
				} else {
					console.log()
					if (this.$route.fullPath.replace(this.$route.fullPath.substring(this.$route.fullPath.indexOf("keyword") + 8), this
							.$route.query.keyword) == `/products?keyword=${this.searchinput}`) {
						this.$router.go(0);
					} else {
						this.$router.push(`/products?keyword=${this.searchinput}`);
						Bus.$emit("getkey", this.searchinput);
					}
				}
			}
		},
		props: ["input"]
	};
</script>

<style scoped="scoped">
	a {
		text-decoration: none;
	}

	img {
		width: 100px;
		height: 40px;
		margin-top: 10px;
	}

	.ikealogo,
	.navtop {
		float: left;
	}
	
	 .iconfont{
		   font-size: 20px;
		   margin-left: 10px;
	   }
	   #aaa{
		   
		   font-size: 20px;
		   margin-left: 10px;
	   }
	
	.usercontent {
		margin-top: 18px;
		width: 100px;
		height: 40px;
		float: right;
	}

	/* .usericon {
		margin-right: 40px;
	} */

	.icon {
		width: 20px;
		height: 20px;
	}
</style>
