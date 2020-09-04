<template>
  <div >
        <img src="https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1604043917,3003776137&fm=202&mola=new&crop=v1" alt="" @click="entershop">
  </div>
</template>

<script>
export default {
  methods:{
         entershop(){
              this.$router.push("shopping")
              // console.log(this.$router.options.routes[1].path)
             }
    
  }
      
}
</script>

<style scoped="scoped">
  *{
     margin: 0;
     padding: 0;
   }
</style>