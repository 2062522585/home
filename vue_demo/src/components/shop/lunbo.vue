<template>

  <div class="div">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_1765556_egxm6ar6k7.css">
     <div class="shopping-lunbo">
				<!-- <span @click="right" class="span1 iconfont icon-zhaozuo1"></span>       -->
					<img v-bind:src="myimg" alt="">
					<!-- <span @click="left" class="span2 iconfont icon-zhaoyou1"></span> -->
					
			</div>
       
  </div>
</template>

<script>
import Bus from "../../js/bus.js"
export default {
  data:function(){
    return{
		i:0,
		myimg:""
		// arr:[]
}
  },
//   methods:{
//     right(){
			
// 				if(this.i==this.arr.length-1)
// 				  this.i=0;
// 				  else
// 				  this.i=this.i+1; 
				  
// 			},
// 			left(){
// 				if(this.i==0)
// 				  this.i=this.arr.length-1;
// 				  else
// 				  this.i=this.i-1;
// 			},
// 			 },
			 created(){
				   Bus.$on("sentmyimg",(mysrc)=>{
					   this.myimg=mysrc
					//    console.log(this.myimg)
                 })

			 }
  
}
</script>

<style scoped>
.div{
	display: inline-block;
}
  .shopping-lunbo{
         margin-left: 200px;
            width: 460px;
           height: 400px;
         position: relative;
  }
  .shopping-lunbo img{
  margin-left: 30px;
    width: 400px;
    height: 400px;

  }
  .span1{
				 position: absolute;
				 /* background-color: white; */
			    left: 0;
				 top: 180px;
         font-size: 30px;
         cursor: pointer;
			
			}
			.span2{
				 position: absolute;
				 top: 180px;
         font-size: 30px;
				 right: 0px;
			       cursor: pointer;

			}
  
 
</style>