<template>
  <div class="adbg">
    <!-- <div class="title">
      <span>数据管理系统</span>
      <i class="el-icon-sunny"></i>
      <el-button type="info" round @click="signout">退出登录</el-button>
    </div> -->
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
  // methods:{
  //   signout(){
  //     this.$router.push("/signout")
  //   }
  // }
}
</script>

<style>
  .title{
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    font-weight: bold;
    /* position: relative; */
  }
  
  /* .el-button.is-round{
    position: absolute;
    top: 10px;
    right: 0;
  } */
  .adbg{
    background-image: url(../../public/img/bgimg.jpg) no-repeat;
  }
  .el-tabs__nav-scroll{
    background-color: rgba(173,216,230,.5);
  }
  .el-tabs__content{
    background-color: rgba(173,216,230,.5);
  }
</style>