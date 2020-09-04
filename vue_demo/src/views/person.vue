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
            <div>
              <i class="el-icon-user"></i>
              <div class="test" :class="{editing: isChecked }">
                <div class="view">
                  <label @dblclick="dbTestname(item.id)">{{ item.username }}</label>
                </div>
                <input
                  v-myfoucs="isChecked"
                  class="edit"
                  type="text"
                  v-model="inputStrname"
                  @blur="inputStredname()"
                />
              </div>
            </div>
          </div>
          <hr />
          <div>
            <i class="el-icon-phone-outline"></i>
            <div>
              <div class="test" :class="{editing: isCheckedtel }">
                <div class="view">
                  <label @dblclick="dbTesttel(item.id)">{{item.tel}}</label>
                </div>
                <input
                  v-myfoucs="isCheckedtel"
                  class="edit"
                  type="text"
                  v-model="inputStrtel"
                  @blur="inputStredtel()"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>主要地址</h3>
          <div>
            <i class="el-icon-location-outline"></i>
            <div>
              <div class="test" :class="{editing: isCheckedadr }">
                <div class="view">
                  <label @dblclick="dbTestadr(item.id)">{{item.address}}</label>
                </div>
                <input
                  v-myfoucs="isCheckedadr"
                  class="edit"
                  type="text"
                  v-model="inputStradr"
                  @blur="inputStredadr()"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <i class="el-icon-message"></i>
          <div>
            <div class="test" :class="{editing: isCheckedmail }">
              <div class="view">
                <label @dblclick="dbTestmail(item.id)">{{item.mail}}</label>
              </div>
              <input
                v-myfoucs="isCheckedmail"
                class="edit"
                type="text"
                v-model="inputStrmail"
                @blur="inputStredmail()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      uname: "",
      id: "",
      list: "",
      item: "",
      isChecked: false,
      isCheckedtel: false,
      isCheckedadr: false,
      isCheckedmail: false,
      inputStrname: "",
      inputStrtel: "",
      inputStradr: "",
      inputStrmail: "",
    };
  },
  mounted() {},
  created() {
    this.get();
  },

  methods: {
    //获取cookie
    getValue(key) {
      let name = key + "=";
      let array = document.cookie.split(";");
      console.log(document.cookie);
      for (let i = 0; i < array.length; i++) {
        let str = array[i].trim();
        if (str.indexOf(name) == 0) {
          return str.substring(name.length, str.length);
        }
      }
      return null;
    },
    get() {
      this.uname = this.getValue("username");
      console.log("old:" + this.uname);
      this.$http
        .post("/showAllinfo", {
          username: this.uname,
        })
        .then((r) => {
          this.list = r.data;
          console.log(this.list);
        });
    },
    //修改名字
    dbTestname(value) {
      this.isChecked = true;
      this.id = value;
    },
    inputStredname() {
      this.isChecked = false;
      if (this.inputStrname === "") {
        alert("请输入");
      } else {
        this.$http
          .post("/updateName", {
            newname: this.inputStrname,
            id: this.id,
          })
          .then((res) => {
            document.cookie = `username=${this.inputStrname}`;
            this.get();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    // 修改电话啊
    dbTesttel(value) {
      this.isCheckedtel = true;
      this.id = value;
    },
    inputStredtel() {
      console.log(this.inputStrtel); //打印修改的内容
      this.isCheckedtel = false;
      if (this.inputStrtel === "") {
        alert("请输入电话");
      } else {
        this.$http
          .post("/updateTel", {
            newtel: this.inputStrtel,
            id: this.id,
          })
          .then((res) => {
            this.get();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    // 修改地址
    dbTestadr(value) {
      this.isCheckedadr = true;
      this.id = value;
    },
    inputStredadr() {
      console.log(this.inputStradr); //打印修改的内容
      this.isCheckedadr = false;
      if (this.inputStradr === "") {
        alert("请输入地址");
      } else {
        this.$http
          .post("/updateAdr", {
            newadr: this.inputStradr,
            id: this.id,
          })
          .then((res) => {
            this.get();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    // 修改邮箱
    dbTestmail(value) {
      this.isCheckedmail = true;
      this.id = value;
    },
    inputStredmail() {
      console.log(this.inputStrmail); //打印修改的内容
      this.isCheckedmail = false;
      if (this.inputStrmail === "") {
        alert("请输入地址");
      } else {
        this.$http
          .post("/updateMail", {
            newmail: this.inputStrmail,
            id: this.id,
          })
          .then((res) => {
            this.get();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  directives: {
    myfoucs: {
      update(el, binding) {
        if (binding.value) {
          el.focus();
        }
      },
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
.el-icon-edit {
  float: right;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

.test.editing .edit {
  display: block;
  width: 150px;
}
.test.editing .edit {
  display: block;
  width: 150px;
}

.test.editing .view,
.test.editingtel.view {
  display: none;
}

.test .edit {
  display: none;
}
</style>