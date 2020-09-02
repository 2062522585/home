<template>

  <div class="div">
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_1765556_egxm6ar6k7.css">
     <div class="shopping-lunbo">
				<span @click="right" class="span1 iconfont icon-zhaozuo1"></span>      
					<img v-bind:src="arr[i]" alt="">
					<span @click="left" class="span2 iconfont icon-zhaoyou1"></span>
					
			</div>
       
  </div>
</template>

<script>
import Bus from "../js/Bus"
export default {
  data:function(){
    return{
        i:0,
			arr:["https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg","https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1151900487,4024660079&fm=26&gp=0.jpg","https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg","https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg","https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"]
}
  },
  methods:{
    right(){
			
				if(this.i==this.arr.length-1)
				  this.i=0;
				  else
				  this.i=this.i+1; 
				  
			},
			left(){
				if(this.i==0)
				  this.i=this.arr.length-1;
				  else
				  this.i=this.i-1;
			},
			 },
			 mounted(){
				   Bus.$on("sentmyimg",(mysrc)=>{
					   this.arr[0]=mysrc
					//    console.log(this.arr[0])
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