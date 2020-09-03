<template>
  <div class="adbg"> 
    <div class="top"></div>
    <div class="main">
      <div id="title">
        <span>数据管理系统<i class="el-icon-sunny"></i></span>
        <el-button type="info" round @click="signout">退出登录</el-button>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="商品表">
            <productshow></productshow>
        </el-tab-pane>
        <el-tab-pane label="用户表">
          <usershow></usershow>
        </el-tab-pane>
        <el-tab-pane label="购物车表">
          <shopshow></shopshow>
        </el-tab-pane>
        
      </el-tabs>
    </div>
    <!-- 返回顶部 -->
    <el-backtop></el-backtop>
  </div>

</template>

<script>
import productshow from "./productshow.vue"
import usershow from "./usershow.vue"
import shopshow from "./shopshow.vue"

export default {
  components:{
    productshow,
    usershow,
    shopshow
  },
  methods:{
    signout(){
      //销毁本地的token
      window.sessionStorage.clear()
      this.$router.push("/adlogin")
    },
    handleScroll(){
      let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let title = document.querySelector("#title");
            if(top > 10){
                title.style.cssText = "position:fixed; top:0; left:0;"
            }else{
                title.style.position = "static";
            }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
   window.removeEventListener('scroll', this.handleScroll) // 销毁页面时清除
  }
  }
</script>

<style>
  .main{
    width: 100%;
    position: relative;
  }
  #title{
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 300;
    padding: 0 20px;
    background-color: rgba(173,216,230);
  }
  
  .el-button.is-round{
    height: 40px;
  }
  .el-tabs__nav-scroll{
    background-color: rgba(173,216,230,.5);
  }
  .el-tabs__content{
    background-color: rgba(173,216,230,.5);
  }
  .el-backtop{
    margin-bottom: 30px;
  }
  .el-backtop .el-icon-caret-top{
    color: coral;
  }
</style>