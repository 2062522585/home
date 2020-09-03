<template>
  <div>
    <div>
      <div class="welcomeBox">
        <p>我的个人档案</p>
        <h1>你好,{{uname}}</h1>
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
      <div class="usermsg" v-for="item in list" :key="item.id" v-on:click="hideTooltip">
        <div class="usertitle">
          <i class="el-icon-user"></i>
          <span>账户</span>
          <el-link icon="el-icon-edit">编辑</el-link>
        </div>
        <div>
          <h3>个人信息</h3>

          <div id="main" v-cloak>
            <div class="tooltip" v-on:click.stop v-if="show_tooltip">
              <!-- <input type="text" v-model="text_content" /> -->
            </div>
            <div>
              <i class="el-icon-user"></i>
              <div id="usname" ref="text" contenteditable="true">{{item.username}}</div>
            </div>
          </div>
          <hr />
          <div>
            <i class="el-icon-phone-outline"></i>
            <span>{{item.tel}}</span>
          </div>
        </div>

        <div>
          <h3>主要地址</h3>
          <el-link icon="el-icon-edit">编辑</el-link>

          <div>
            <i class="el-icon-location-outline"></i>
            <span>{{item.address}}</span>
          </div>
        </div>

        <hr />
        <div>
          <i class="el-icon-message"></i>
          <span>{{item.mail}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valuetext: "",
      user: [],
      uname: "",
      id: "",
      list: "",
      show_tooltip: false,
      text_content: "",
    };
  },
  mounted() {
    this.uname = this.getValue("username");
    console.log(this.uname);
    var user = document.cookie.split(";");
    this.user = user;
    this.$http
      .post("/showAllinfo", {
        username: this.uname,
      })
      .then((r) => {
        this.list = r.data;
        console.log(this.list);
        var myid = this.list.id;
        console.log(myid);
      });
  },
  created() {},

  methods: {
    //获取cookie
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
    //
    hideTooltip: function () {
      this.show_tooltip = false;

      var newname = document.getElementById("usname").innerHTML;
      console.log(newname);
      this.$http
        .post("/updateName", {
          newname: this.newname,
        })
        .then((res) => {
          alert("修改成功");
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
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
  margin-top: 10px;
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
  margin-top: 5px;
}
.cardsitem-2-1 > p {
  margin-top: 5px;
}
.cardsitem-2 {
  margin-left: 20px;
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