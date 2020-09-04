<template>
  <div class="box">
    <div class="login">
      <!-- 登录界面 -->
      <div class="usertop">用户登录</div>
      <div class="blank"></div>
      <form action>
        <input type="text" v-model="username" value="请输入账号" />
        <input type="password" v-model="password" value="请输入密码" />
        <button type="button" @click="userlogin">登录</button>
        <router-link to="/register" class="registered">还没有账号，注册</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    userlogin() {
      this.$http
        .post("/userlogin", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let list = res.data;
          if (list.length == 1) {
            let user = list[0];
            // document.cookie = user.username;
            document.cookie = `username=${res.data[0].username}`;
            // document.cookie = `password=${res.data[0].pwd}`;
            console.log(document.cookie)  
	              alert("登陆成功");
		let ass=2
            if(ass==this.$route.query.idname){
                
             this.$router.push({
                path: "/shopping",  
                query:{
                   username:res.data[0].username,
                   id:this.$route.query.ssss
                }
            });
            }else{
                       this.$router.push({
                   path:"/",
                   query:{
                      username:res.data[0].username
                   }
            });
               
            }
          } else {
            alert("用户名或密码错误");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  
};
</script>
    
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.box {
  background-image: url(../image/bg.jpg);
  width: 100%;
  height: 750px;
  position: relative;
  border-image-repeat: none;
  margin-top: 10px;
}
.login {
  width: 460px;
  height: 360px;
  padding: 32px 80px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 13px 40px 0 rgba(0, 0, 0, 0.5);
  background-color: rgba(252, 248, 248, 0.7);
  position: absolute;
  top: 20%;
  left: 10%;
}

.usertop {
  font-size: 32px;
  font-weight: bold;
  padding: 8px 0;
  border-bottom: 1px solid #666;
}
.blank {
  height: 30px;
}
form {
  font-size: 22px;
}

input {
  outline: none;
  width: 290px;
  height: 30px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 6px;
}

button {
  width: 290px;
  height: 34px;
  background-color: #556d73;
  border: 1px solid black;
  border-radius: 6px;
}
.registered {
  float: right;
  font-size: 14px;
  color: #556d73;
}
</style>