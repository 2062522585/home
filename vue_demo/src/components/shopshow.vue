<template>
  <div>
        <el-table :data="tableData" border style="width: 100%" :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="myimg" label="图片" width="200">
          <template scope="scope">
            <img :src="scope.row.myimg" width="100" height="100"/>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名" width="160"></el-table-column>
        <el-table-column prop="msg" label="介绍"></el-table-column>
        <el-table-column prop="price" label="价格" width="100"></el-table-column>
        <el-table-column prop="brand" label="品牌名" width="160"></el-table-column>
        <el-table-column prop="userid" label="外键值" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: []
      }
    },
    created(){
      this.showAll()
    },
    methods: {
      showAll(){
        this.$http.get("http://192.168.6.13:7002/getAllShop",{
          params:{
            pid:this.pid
          }
        }).then((res)=>{
          // console.log(res.data)
          this.tableData=res.data
        })
        
      }
    }
}
</script>

<style>
</style>