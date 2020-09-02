<template>

  <div class="div">
         <lunbo></lunbo>
       
         <submitshopping></submitshopping>


  </div>
</template>

<script>
import lunbo from "../components/lunbo"
import  submitshopping from "../components/submitshopping"
export default {
           components:{
              lunbo,
              submitshopping
   },
}
</script>

<style scoped>
       .div{
         display: flex;
       }
 
</style>