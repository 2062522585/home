<template>
  <div>
    <div class="content">
      <div>
        <h2>创建宜家账号</h2>
      </div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <!-- //姓名 -->
        <div>
          <el-form-item class="ellabel" label="姓名"></el-form-item>
          <el-input v-model="formLabelAlign.name"></el-input>
        </div>
        <!-- //电话 -->
        <div>
          <el-form-item class="ellabel" label="移动电话"></el-form-item>
          <el-input v-model="formLabelAlign.phone"></el-input>
        </div>
        <!-- //邮箱 -->
        <div>
          <el-form-item class="ellabel" label="电子邮箱/用户名"></el-form-item>
          <el-input v-model="formLabelAlign.email"></el-input>
        </div>
        <!-- //密码 -->
        <div>
          <el-form-item class="ellabel" label="密码"></el-form-item>
          <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
        </div>
      </el-form>
      <!-- <hr /> -->
      <div>
        <el-checkbox v-model="checked">我承认我已知悉 隐私政策</el-checkbox>
      </div>
      <div>
        <el-button type="primary" @click="register">创建账号</el-button>
      </div>
      <div>
        <router-link to="/userlogin">返回登陆</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pwd: "",
      checked: false,
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    register() {
      console.log(1);
      if (this.checked == true) {
        this.$http
          .post("/register", {
            name: this.formLabelAlign.name,
            phone: this.formLabelAlign.phone,
            email: this.formLabelAlign.email,
            pwd: this.pwd,
          })
          .then((res) => {
            alert("注册成功");
          })
          .catch((e) => {
            console.log(e);
            alert("请求错误");
          });
      }else{
        alert("请确认隐私政策")
      }
    },
  },
};
</script>
<style scoped>
.content {
  text-align: center;
	margin-top: 50px;
}
.el-input {
  width: 650px;
}
.ellabel {
  width: 650px;
  text-align: left;
  margin: 0 auto;
  height: 30px;
  margin-top: 15px;
}
hr {
  width: 650px;
  margin-top: 30px;
}
.el-checkbox,
.el-button {
  margin-top: 20px;
}
.el-button {
  width: 650px;
  height: 50px;
  background-color: rgb(64, 122, 177);
}
</style>