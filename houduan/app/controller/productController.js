'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  //查询商品
  async getAllProduct() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.productService.getAllProduct(ctx.request.query);

  }

  //删除商品
  async delById(){
    let id = this.ctx.request.query.id;
    let r = await this.ctx.service.productService.delById(id);
    this.ctx.response.body = r;
}

  // 上传商品
  async uploadFile(){
    let brand=this.ctx.request.body.brand;
    let name=this.ctx.request.body.name;
    let price=this.ctx.request.body.price;
    let keyword=this.ctx.request.body.keyword;
    let msg=this.ctx.request.body.msg;
    let fileSrc=this.ctx.request.body.fileSrc;
    let r = await this.ctx.service.productService.uploadFile(brand,name,price,keyword,msg,fileSrc);
    this.ctx.response.body = r;

}

  //上传图片地址
  async uploadImg() {
    let newUrl = await this.ctx.service.productService.uploadImg();
    this.ctx.response.body = newUrl; 
    }

  //修改商品信息
  async updateProduct(){
    let id = this.ctx.request.body.id;
    let newbrand = this.ctx.request.body.newbrand;
    let newname = this.ctx.request.body.newname;
    let newprice = this.ctx.request.body.newprice;
    let newkeyword = this.ctx.request.body.newkeyword;
    let newmsg = this.ctx.request.body.newmsg;
    let r = await this.ctx.service.productService.updateProduct(id,newbrand,newname,newprice,newkeyword,newmsg);
    this.ctx.response.body = r;
  }
  

}

module.exports = ProductController;
