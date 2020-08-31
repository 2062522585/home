<template>

  <div class="nav">
    <div class="header">
      <div class="ikealogo">
        <a href="">
        <img src="../image/IKEA_logo.jpg" alt />
        </a>
      </div>
      <div class="navtop">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
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
            <el-menu-item index="3-1">选项1</el-menu-item>
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
      </div>
    </div>
    <div class="search">
      <div style="margin-top: 15px;">
        <el-input placeholder="你在找什么？" v-model="searchinput" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  <router-view></router-view>

  </div>
</template>
<script>
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
  },
};
</script>

<style scoped="scoped">
img {
  width: 100px;
  height: 40px;
  margin-top: 10px;
}
.ikealogo,.navtop{
  float: left;
}
.usercontent{
  width: 100px;
  height: 40px;
  float: right;
}
.usericon{
  margin-right: 40px;
}
.icon{
  width: 20px;
  height: 20px;
}
</style>
