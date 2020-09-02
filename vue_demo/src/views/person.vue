<template>
  <div>
    <div>
      <div class="welcomeBox">
        <p>我的个人档案</p>
        <h1>你好,</h1>
      </div>
      <div class="content">
        <div class="content-middle">
          <div class="cards">
            <a href>
              <div class="cardsitem-1">
                <li class="el-icon-document-checked"></li>
              </div>
              <div class="cardsitem-2">
                <div class="cardsitem-2-1">
                  <h3>历史订单</h3>
                  <p>没有保存的订单</p>
                </div>
                <div class="cardsitem-2-2">
                  <li class="el-icon-arrow-right"></li>
                </div>
              </div>
            </a>
          </div>
          <div class="cards">
            <a href>
              <div class="cardsitem-1">
                <li class="el-icon-present"></li>
              </div>
              <div class="cardsitem-2">
                <div class="cardsitem-2-1">
                  <h3>心愿单</h3>
                  <p>没有保存的心愿单</p>
                </div>
                <div class="cardsitem-2-2">
                  <li class="el-icon-arrow-right"></li>
                </div>
              </div>
            </a>
          </div>
          <div class="cards">
            <a href>
              <div class="cardsitem-1">
                <li class="el-icon-document-add"></li>
              </div>
              <div class="cardsitem-2">
                <div class="cardsitem-2-1">
                  <h3>我的沙发套小样</h3>
                  <p></p>
                </div>
                <div class="cardsitem-2-2">
                  <li class="el-icon-arrow-right"></li>
                </div>
              </div>
            </a>
          </div>
          <div class="cards">
            <a href>
              <div class="cardsitem-1">
                <li class="el-icon-discount"></li>
              </div>
              <div class="cardsitem-2">
                <div class="cardsitem-2-1">
                  <h3>优惠卷兑换</h3>
                  <p>使用兑换码兑换优惠卷</p>
                </div>
                <div class="cardsitem-2-2">
                  <li class="el-icon-arrow-right"></li>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="content-bottom">
          <div>
            <i class="el-icon-discount"></i>
            <span>你的优惠信息</span>
          </div>
          <div></div>
          <div></div>
        </div>
        <hr class="liner" />
      </div>
      <div class="usermsg">
        <div class="usertitle">
          <i class="el-icon-user"></i>
          <span>账户</span>
        </div>
        <div>
          <h3>个人信息</h3>
        </div>
        <div>
          <i class="el-icon-user"></i>
          <span>账户</span>
        </div>
        <hr />
        <div>
          <i class="el-icon-phone-outline"></i>
          <span>dianhua</span>
        </div>
        <div>
          <h3>主要地址</h3>
        </div>
        <div>
          <i class="el-icon-location-outline"></i>
          <span>-</span>
        </div>
        <hr />
        <div>
          <i class="el-icon-message"></i>
          <span>邮箱</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var user=document.cookie.split(";");
console.log(user)
// function getCookie(username) {
//   var arrStr = document.cookie.split("; ");
//   console.log(arrStr)
//   for (var i = 0; i < arrStr.length; i++) {
//     var temp = arrStr[i].split("=");
//     if (temp[0] == username) return unescape(temp[1]);
//   }
// }
// getCookie()
</script>







<style scoped>
.welcomeBox {
  background-color: rgb(245, 245, 245);
  width: 100%;
  height: 250px;
  color: #000000;
  margin-top: 10px;
  padding-top: 35px;
}
.welcomeBox p,
h1 {
  text-align: left;
  margin-left: 300px;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* margin-left: -1rem; */
  /* margin-right: -1rem; */
}
.content-middle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* margin-left: -1rem;
    margin-right: -1rem; */
}
.cards {
  display: flex;
  align-items: center;
  border-radius: 0.3em;
  border: 0.1em solid;
  border-color: #999;
  padding: 1em;
  /* margin-bottom: 1em; */
  margin-top: 1em;
  margin-right: 1em;
  margin-left: 1em;
  /* margin-top: 0 auto; */
  width: 480px;
  height: 80px;
}
.cardsitem-1,
.cardsitem-2,
.cardsitem-2-1 {
  float: left;
}
.el-icon-document-checked:before,
.el-icon-discount,
.el-icon-present,
.el-icon-document-add {
  font-size: 50px;
  color: rgb(78, 76, 76);
}
.el-icon-arrow-right {
  margin-left: 150px;
  font-size: 40px;
  color: rgb(78, 76, 76);
  margin-top: 22px;
}
.cardsitem-1 {
  margin-top: 15px;
}
.cardsitem-2-1 > p {
  margin-top: -15px;
}
.cardsitem-2 {
  /* margin-left: 20px; */
  color: rgb(78, 76, 76);
  margin-top: -6px;
}
.cardsitem-2-2 {
  float: right;
  font-size: 60px;
  color: rgb(78, 76, 76);
}
.content-bottom {
  width: 71%;
  height: 400px;
  margin-top: 20px;
  background: rgb(245, 245, 245);
}
.liner {
  height: 8px;
  width: 71%;
  background-color: #eff7f7;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.usermsg {
  width: 71%;
  margin: 0 auto;
  color: #000000;
}
.usertitle {
  font-size: 25px;
}
</style>