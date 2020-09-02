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
						<el-menu-item index="1-1">选项1</el-menu-item>
						<el-menu-item index="1-2">选项2</el-menu-item>
						<el-menu-item index="1-3">选项3</el-menu-item>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">房间</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
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
								<el-menu-item index="3-1-4">屉柜</el-menu-item>
							</div>
						</el-submenu>
						<el-menu-item index="3-2">选项2</el-menu-item>
						<el-menu-item index="3-3">选项3</el-menu-item>
						<el-submenu index="3-4">
							<template slot="title">选项4</template>
							<el-menu-item index="3-4-1">选项1</el-menu-item>
							<el-menu-item index="3-4-2">选项2</el-menu-item>
							<el-menu-item index="3-4-3">选项3</el-menu-item>
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
				<router-link to="/shopping" class="iconfont usericon">&#xe69a;</router-link>
				<router-link to="/userlogin" class="el-icon-bell usericon"></router-link>
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
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
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

	.usercontent {
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
