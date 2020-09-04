<template>
    <div class="box">
        <div class="login">
            <!-- 登录界面 -->
            <div class="adtop">管理员登录</div>
            <div class="blank"></div>
            <form action="">
                <input type="text" v-model="username" placeholder="请输入账号">
                <input type="password" v-model="pwd" placeholder="请输入密码">

                <button type="button" @click="adlogin">登录</button>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    data:function(){
        return{
            username:"",
			pwd:""
        }
    },
    // created(){
    //     console.log(this)
    // },
    methods:{
        adlogin(){
            this.$http.post("http://localhost:7002/adlogin",{
                username:this.username,
                pwd:this.pwd
            }).then((res)=>{
                // console.log(res.data);
                if(res.data.status==0){
                    this.nologin=false;
                    sessionStorage.setItem("nologin",1)
                    this.$router.push("/admin")
                }
                alert(res.data.msg)
            }).catch((e)=>{
                console.log(e)
            })
        }
    }
}
</script>
    
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box{
        background-image: url(../image/bg.jpg);
        width: 100%;
        height: 750px;
        position: relative;
    }
    .login {
			width: 460px;
			height: 360px;
            padding: 32px 80px;
			border: 1px solid #ccc;
			text-align: center;
			border-radius: 16px;
            box-shadow: 0 13PX 40PX 0 rgba(0,0,0,.5);
            background-color: rgba(252, 248, 248, 0.7);
            position: absolute;
            top: 20%;
            left: 10%;
		}

	.adtop{
        font-size: 32px;
        font-weight: bold;
        padding: 8px 0;
        border-bottom: 1px solid #666;
    }
    .blank{
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
</style>