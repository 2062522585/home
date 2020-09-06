<template>
  <div>
        <el-table :data="tableData" border style="width: 100%" :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="tel" label="联系电话"></el-table-column>
        <el-table-column prop="mail" label="邮箱"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data:function() {
      return {
        tableData: []
      }
    },
    created(){
      this.showAll()
    },
    methods: {
      showAll(){
        this.$http.get("http://192.168.6.13:7002/getAllUser",{
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