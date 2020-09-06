<template>
	<div class="goods">
		<h3 class="h3">{{brand}}</h3>

		<p>{{name}}</p>

		<h2 class="h2">
			￥
			<span v-text="price"></span>
		</h2>
		<p>(2020年08月13日 - 2020年11月10日 售完即止)</p>
		<h3 class="h3-1">商品介绍</h3>
		<p>{{msg}}</p>
		<div class="num">
			<span>数量</span>
			<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			<!-- <div class="num-click"> -->
			<!-- <button  type="button" @click="numsub" v-html="sub"></button> -->
			<!-- <div style="display:inline-block;">-</div> -->
			<!-- <span v-text="num"></span> -->
			<!-- <div style="display:inline-block;" v-html="num"></div> -->
			<!-- <input type="text" v-model.number="num" style="width:20px;outline:none;border:none"> -->
			<!-- <button type="button"  @click="numadd">&#43;</button> -->
			<!-- <div style="display:inline-block;">+</div> -->
			<!-- </div> -->
		</div>

		<el-button type="text" @click="open">
			<span class="entershopping">加入购物车</span>
			<!-- <router-link to="/payfor?id=?" class="entershopping">加入购物车</router-link> -->
		</el-button>
		<!-- <router-link to="/payfor">版权</router-link > -->

	</div>
	<!-- //需要修改 -->
	<!-- <button @click="handleclick">点击</button> -->
	<!-- //需要修改 -->


</template>

<script>
	import Bus from "../../js/bus.js"
	// import payfor from "./payfor"
	export default {
		data() {
			return {
				sub: "&#45;",
				name: "",
				price: 0,
				msg: "",
				myimg: "",
				num: 1,
				brand: "",
				zongjia: 0,
				shoppingArr: [],
				id: 2,


			}
		},

		created() {
			this.$http.post("/shopping", {
				id: this.$route.query.id
			}).then(res => {
				this.shoppingArr = res.data
				this.brand = this.shoppingArr[0].brand
				this.name = this.shoppingArr[0].name
				this.price = this.shoppingArr[0].price
				this.msg = this.shoppingArr[0].msg
				this.myimg = this.shoppingArr[0].myimg
				this.id = this.shoppingArr[0].id
				// this.num=this.shoppingArr[0].num
				// this.zongjia= this.price*this.num

			}).catch(err => {
				console.log("axios访问失败")
			})

		},
		watch: {
			myimg() {
				Bus.$emit("sentmyimg", this.myimg)
				//  console.log(this.myimg)
			}

		},
		methods: {
			handleChange(value) {
				console.log(value);
			},

			numadd() {
				this.num += 1
				console.log(this.num)
			},
			numsub() {
				if (this.num != 1) {
					this.num -= 1
					console.log(this.num)
				}
			},
			getValue(key) {
				let name = key + "=";
				let array = document.cookie.split(";");
				for (let i = 0; i < array.length; i++) {
					let str = array[i].trim();
					if (str.indexOf(name) == 0) {
						return str.substring(name.length, str.length);
					}
				}

				return null;
			},
			open() {
				let username = this.getValue("username");
				if (username) {
					this.$confirm('商品已加入购物车，是否进入购物车', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning',

					}).then(() => {
						this.$message({
							type: 'success',
							message: '已进入购物车!',

						})


						this.$http.post("/shoppingadd", {
							name: this.name,
							myimg: this.myimg,
							price: this.price,
							brand: this.brand,
							num: this.num,
							zongjia: this.zongjia = this.num * this.price,
							userid: username
						}).then(res => {
							//  alert(1)
							this.$router.push({
								path: "/payfor",

								query: {
									userid: this.$route.query.username
								}
							});

						}).catch(err => {
							console.log("axios访问失败")
						})


					}).catch(() => {
						this.$message({
							type: 'info',
							message: '欢迎继续选购商品'
						});

					});


				} else {
					let a = this.$route.query.id
					//  console.log(859985,a)
					alert("您还没有登录")
					this.$router.push({
						path: "/userlogin",
						query: {
							idname: 2,
							ssss: this.$route.query.id
						}
					});
				}
			}




		}


	}
</script>

<style scoped="scoped">
	.goods {
		width: 400px;
		display: inline-block;
		height: 500px;
		/* border: 1px solid red; */
		margin-left: 100px;
	}

	p {
		margin-top: 4px;
	}

	.h3 {
		margin-top: 30px;
		font-size: 20px;
	}

	.h3-1 {
		margin-top: 10px;
		font-size: 20px;
	}

	.h2 {
		margin-top: 10px;
		font-size: 25px;
	}

	.num {
		height: 50px;
		display: flex;
		margin-top: 10px;
		line-height: 50px;
	}

	.num-click {
		width: 150px;
		display: inline-block;
		margin-left: 215px;
		display: flex;
		border: 1px solid #959595;
	}

	.num-click span {
		text-align: center;
		/* display: inline-block;
      margin-top: 0; */
		width: 50px;
		height: 50px;
	}

	/* .el-button{
     width: 400px;
      cursor: pointer;
      background-color: #0058A3;
  } */
	/* .el-button--text span{
  
   font-size: 25px;
  color: black;
} */
	.entershopping {
		display: inline-block;
		width: 400px;
		font-size: 25px;
		text-decoration: none;
		height: 50px;
		line-height: 50px;
		color: white;
		cursor: pointer;
		background-color: #0058A3;
	}

	.el-input-number {
		margin-left: 180px;
	}
</style>
