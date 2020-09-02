<template>
   <div class="goods">
        <h3 class="h3">{{brand}}</h3>
        <p>{{name}}</p>
        <h2 class="h2">￥{{price}}</h2>
        <p>(2020年08月13日 - 2020年11月10日 售完即止)</p>
        <h3 class="h3-1">商品介绍</h3>
        <p>{{msg}}</p>
        <div class="num">
           <span>数量</span>
              <div class="num-click">
              <button @click="numsub">-</button>
                 <span>{{num}}</span>
              <button  @click="numadd">+</button>
              </div>
        </div>
              <p class="enterpayfor" @click="enterpayfor">加入购物车</p>









    <!-- //需要修改 -->
<!-- <button @click="handleclick">点击</button> -->
<!-- //需要修改 -->
         
      
          </div>
</template>

<script>
import Bus from "../js/Bus"
export default {
          data(){
           return {
               name:"",
               price:0,
               msg:"",
               myimg:"",
               num:1,
               brand:"",
        shoppingArr:[]
   }
  },
     created(){
           this.getdata()
     },
     mounted(){
          this.handleclick()
            //  console.log(1)
            //  console.log(this.myimg)
     },
     methods:{
         handleclick(){
             Bus.$emit("sentmyimg",this.myimg)
            //  console.log(1)
             console.log(this.myimg)
               },
               numadd(){
                   this.num+=1
                
               },
               numsub(){
                        if(this.num!=1){
                             this.num-=1
                        }
               },
               enterpayfor(){
                   console.log(555)
               },
         getdata(){
                this.$http.post("/shopping",{
       }).then(res=>{
            this.shoppingArr=res.data
            this.brand=this.shoppingArr[0].brand
           this.name=this.shoppingArr[0].name
           this.price=this.shoppingArr[0].price
           this.msg=this.shoppingArr[0].msg
           this.myimg=this.shoppingArr[0].myimg
            // console.log(this.shoppingArr[0].name)
           
       }).catch(err=>{
       console.log("axios访问失败")
       })
         }


     }
     

}
</script>

<style scoped>
         .goods{
    width: 400px;
    display: inline-block;
    height: 500px;
    /* border: 1px solid red; */
    margin-left: 100px;
  }  
  p{
      margin-top: 4px;
  }
  .h3{
      margin-top: 30px;
      font-size: 20px;
  }
   .h3-1{
      margin-top: 10px;
      font-size: 20px;
  }
  .h2{
      margin-top: 10px;
      font-size: 25px;
  }
  .num{
      height: 50px;
      display: flex;
      margin-top: 10px;
      line-height: 50px;
  }
  .num-click{
      width: 150px;
      display: inline-block;
     margin-left: 215px;
     display: flex;
      border: 1px solid #959595;
  }
  button{
      width: 50px;
      height: 48px;
      font-size: 35px;
      cursor: pointer;
      border: 0px solid white;
      background-color: white;
  }
  .num-click span{
      text-align: center;
      /* display: inline-block;
      margin-top: 0; */
      width: 50px;
      height: 50px;
  }
  .enterpayfor{
      margin-top: 20px;
      cursor: pointer;
      height: 50px;
      color: white;
      line-height: 50px;
      text-align: center;
      background-color: #0058A3;
  }
</style>