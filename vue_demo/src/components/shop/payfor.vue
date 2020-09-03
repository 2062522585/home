<template>
  <div class="box-payfor">
    <div>
      <h3 class="h2">购物袋</h3>
      <div class="box-payfor-nav">
        <div class="h3-num">
          <span>购物袋合计</span>
          <span v-text="timess"></span>
          个商品
        
        </div>
        <h3 class="hww2">￥</h3>
        <h3 v-text="shopzongjia"></h3>
      </div>
      <p>
        <span>亲爱的顾客，各个地区的商品库存状态有所区别，购物袋内库存不足的商品将自动移入心愿单，不便之处敬请谅解。</span>
      </p>
      <button type="button" class="payfor" @click="payfoumoney">立即结算</button>
    </div>
    <div class="goodsmsg" v-for="item in shoparr" :key="item.id">
      <img :src="item.myimg" alt />
      <div class="shoppdata">
        <h3>{{item.brand}}</h3>
        <span>{{item.name}}</span>
        <h3 class="aaa">￥{{item.price}}</h3>
      
      </div>
      <div class="xiala">
        <template>
          <el-select v-model="item.num" placeholder="请选择" style="width:'100px'">
            <el-option
              v-for="item in numarr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>

        <br />
        <button @click="changdata(item.num,item.id,item.price)" class="queding">确定</button>
        <i class="el-icon-delete" @click="deletedata(item.id)"></i>
          <h3 class="sss">￥{{item.zongjia}}</h3>
      </div>
    </div>
  </div>
</template>
     
       

<script>

export default {
 
  data() {
    return {
      num: 0,
      name: "",
      timess: 0,
      shopzongjia: 0,
      price: 0,
      myimg: "",
      brand: "",
      i: 1,
      shoparr: [],
      numarr: [],
      value: "",
      shoppingprice: 0,
    };
  },
  created() {
    for (let i = 1; i < 100; i++) {
      this.numarr.push({
        value: `${i}`,
        label: i,
      });
    }

    this.shoppingshow();            
         
  },
 

  methods: {
    payfoumoney(){
     alert("我穷的都吃土了，还有钱买这玩意儿？")
    },


    changdata(numdata, a, price) {
      this.$http
        .post("/shoppingxiugai", {
          num: numdata,
          id: a,
          zongjia: numdata * price,
        })
        .then((res) => {
          this.shoparr = res.data;
          this.shoppingshow();
        })
        .catch((err) => {
          console.log("axios访问失败");
        });
    },
    deletedata(id) {
      this.$http
        .get("/shoppingdelete", {
          params: {
            id: id,
          },
        })
        .then((res) => {
          this.shoppingshow();
        })
        .catch((err) => {
          console.log("axios访问失败");
        });
				this.$router.go(0);
    },
    shoppingshow() {
      this.$http
        .post("/shoppingshow", {})
        .then((res) => {
                    let a=0;
                   let b=0;
          for (let i = 0; i <res.data.length; i++) {
             a+= res.data[i].num;
             b+= res.data[i].zongjia;
          }
                 this.timess=a;
                  this.shopzongjia=b;
                      if(this.timess){
                      console.log( this.timess,this.shopzongjia)
                       this.shoparr = res.data;
                  }
          // console.log(this.timess, this.shopzongjia);

          // console.log(this.shoparr);
        })
        .catch((err) => {
          console.log("axios访问失败");
        });
    },
  },
};
</script>

<style scoped>
.box-payfor {
  /* border: 1px solid red; */
  width: 46%;
  /* height: 600px; */
  margin-left: 23%;
  /* overflow:auto */
}
.box-payfor p {
  height: 70px;
  /* margin-top: 5px; */
  /* line-height: 100px; */
  background-color: #f2f2f2;
}
.box-payfor p span {
  display: inline-block;
  margin-top: 14px;
}
.box-payfor-nav {
  /* margin-top: 10px; */
  height: 60px;
  display: flex;
  line-height: 60px;
  justify-content: space-between;
}
.hww2{
  margin-left: 380px;
}
.h3-num{
         font-size: 18px;
         font-weight: bold;
}
.goodsmsg {
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  margin-top: 10px;
  height: 160px;
  display: flex;
  /* border: 1px solid red; */
}
.goodsmsg img {
  width: 145px;
  height: 145px;
  margin-left: 10px;
  /* margin-top: 20px; */
  /* border: 1px solid red; */
}
.h2 {
  margin-top: 5px;
}
.payfor {
  margin-top: 20px;
  width: 350px;
  height: 50px;
  line-height: 50px;
  background-color: #0058a3;
  cursor: pointer;
  color: white;
  border: none;
  margin-left: 272px;
}
.shoppdata {
  display: inline-block;
  width: 250px;
  margin-top: 20px;
  margin-left: 20px;
  /* height: 200px; */
}
.shoppdata h3 {
  margin-top: 10px;
}
.shoppdata span {
  display: inline-block;
  margin-top: 10px;
}
.xiala {
  margin-top: 20px;
  width: 100px;
  margin-left: 115px;
}

.el-icon-delete {
  margin-top: 12px;
  margin-left: 22px;
  cursor: pointer;
  font-size: 20px;
}
.sss {
  display: inline-block;
  width: 100px;
  margin-top: 20px;
  font-size: 15px;
  /* height: 50px; */
  /* margin-left: 100px; */
  margin-left: 10px;
}
.aaa{
display: inline-block;
}
.queding {
  margin-top: 10px;
  font-size: 15px;
}
</style>