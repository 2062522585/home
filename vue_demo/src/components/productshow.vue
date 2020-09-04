<template>
  <div class="box">
    <el-table :data="tableData" border style="width: 100%" :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
        <el-table-column fixed prop="id" label="ID" width="60"></el-table-column>
        <el-table-column prop="myimg" label="图片" width="200">
          <template scope="scope">
            <img :src="scope.row.myimg" width="100" height="100"/>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名" width="180">
          <template slot-scope="scope">
            <el-input v-if=" isEdit == scope.$index " v-model="scope.row.name" placeholder="请输入内容" style="text-align: center;"></el-input>
            <span v-if=" isEdit != scope.$index ">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="msg" label="介绍" width="540">
          <template slot-scope="scope">
            <el-input v-if=" isEdit == scope.$index " v-model="scope.row.msg" placeholder="请输入内容" style="text-align: center;"></el-input>
            <span v-if=" isEdit != scope.$index ">{{ scope.row.msg }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="100">
          <template slot-scope="scope">
            <el-input v-if=" isEdit == scope.$index " v-model="scope.row.price" placeholder="请输入内容" style="text-align: center;"></el-input>
            <span v-if=" isEdit != scope.$index ">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="keyword" label="关键词" width="100">
          <template slot-scope="scope">
            <el-input v-if=" isEdit == scope.$index " v-model="scope.row.keyword" placeholder="请输入内容" style="text-align: center;"></el-input>
            <span v-if=" isEdit != scope.$index ">{{ scope.row.keyword }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="brand" label="品牌" width="140"><template slot-scope="scope">
            <el-input v-if=" isEdit == scope.$index " v-model="scope.row.brand" placeholder="请输入内容" style="text-align: center;"></el-input>
            <span v-if=" isEdit != scope.$index ">{{ scope.row.brand }}</span>
          </template>

        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
                <!-- 编辑 -->
              <el-button class="edit" @click="updateProduct(scope.$index,scope.row)" type="text" size="small">{{scope.row.butxt}}</el-button>              
              <!-- 删除 -->
              <el-button class="edit" @click="delProduct(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 商品上传 -->
    <div class="addpd">
      <div :class="myclass">
        <input type="text" v-model="brand" placeholder="品牌名" /><br />
        <input type="text" v-model="name" placeholder="商品名" /><br />
        <input type="text" v-model="price" placeholder="价格" /><br />
        <input type="text" v-model="keyword" placeholder="关键词" /><br />
        <input type="text" v-model="msg" placeholder="介绍" /><br />

        <!-- :on-success="getEggImg"接收图片地址 -->
        <el-upload
          class="upload-demo"
          action="http://localhost:7002/uploadImg"
          :on-success="getEggImg"
          multiple
          :limit="1"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        
      </div>
      <button class="addbtn" type="button" @click="addProduct">增加商品</button>
    </div>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        tableData: [],
        fileList:[],
        fileSrc:"",//存放图片地址
        myclass: "hidden",
        brand: "",
        name: "",
        price: "",
        keyword: "",
        msg: "",
        isEdit: -1
      }
    },
    created(){
      // console.log(this)
      this.showAll()
    },
    methods: {
      //拿到地址
      getEggImg(){
        // console.log(arguments)
        this.fileSrc=arguments[0]
      },
      // 显示所有商品
      showAll(){
        this.$http.get("http://localhost:7002/getAllProduct",{
          params:{
            pid:this.pid
          }
        }).then((res)=>{
          // console.log(res.data)
          res.data.forEach(element => {
            element.butxt="编辑"
          });
          this.tableData=res.data
        })
      },
      //编辑商品
      updateProduct(index,row) {
        // console.log(index,row)
        if(row.butxt=="编辑"){
          row.butxt="确定"
          this.isEdit = index;
        }else{
          row.butxt="编辑"
          this.isEdit=-1
          // console.log(row)
          let newbrand=row.brand;
          let newname=row.name;
          let newprice=row.price;
          let newkeyword=row.keyword;
          let newmsg=row.msg;
          this.$http.post("http://localhost:7002/updateProduct",{
            id:row.id,
            newbrand:newbrand,
            newname:newname,
            newprice:newprice,
            newkeyword:newkeyword,
            newmsg:newmsg
          }).then((res)=>{
            // console.log(res.data)
            this.showAll()
          })
        }
      },
      //删除商品
      delProduct(myid){
          // console.log(myid.id);
          this.$http.get("http://localhost:7002/delById",{
            params:{
              id:myid.id
            }
          }).then((res)=>{
            // console.log(res.data)
            if(res.data==1){
              this.showAll()
            }
          })
      },

      //增加商品
      addProduct() {
        if (this.myclass == "hidden") {
          this.myclass = "newbox"; //显示
        } else {
          this.myclass = "hidden"; //隐藏
          //同时增加商品
          // console.log(this);
          this.$http.post("http://localhost:7002/uploadFile",{
            brand:this.brand,
            name:this.name,
            price:this.price,
            keyword:this.keyword,
            msg:this.msg,
            fileSrc:this.fileSrc
          }).then((res)=>{
            // console.log(res.data)
            this.showAll()
          })
           
        }
      }
    
    }
  }
</script>

<style scoped>
    .el-tabs__content{
      text-align: center;
    }
    .box{
      padding-bottom: 40px;
      position: relative;
    }
    .edit{
        width: 50px;
        height: 30px;
        border: 1px solid #ccc;
        text-align: center;
    }
    .edit:hover{
      border: 1px solid #ccc;
    }
    .el-button--small span{
        font-size: 14px;
    }
    .addpd{
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 100;
    }
    .el-input__inner{
      width: 100%;
      height: 100px;
    }
    .newbox {
      width: 400px;
      height: 360px;
      border: 1px solid #ccc;
      background-color: rgba(204, 204, 204, 0.9);
      padding-top: 40px;
      box-sizing: border-box;
      border-radius: 16px;
    }
    .hidden {
      display: none;
    }
    input {
      width: 270px;
      height: 30px;
      margin-left: 60px;
      margin-bottom: 10px;
      border: 1px solid black;
      border-radius: 4px;
      outline: none;
    }
    .addbtn {
      width: 150px;
      height: 30px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      background-color: coral;
      color: white;
      font-size: 16px;
      font-weight: bold;
      outline:none;
    }
    .upload-demo{
      margin-left: 50px;
    }

</style>