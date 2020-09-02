const Controller = require('egg').Controller; 

class shoppingController extends Controller {
	//登录
	async shopping() {
	      
			let id=this.ctx.request.body.id;
			let res=await this.ctx.service.shoppingservice.shopping(id);
			this.ctx.response.body=res;
			// console.log(res)
	}

	async shoppingadd() {
		let name=this.ctx.request.body.name;
		let myimg=this.ctx.request.body.myimg;
		let price=this.ctx.request.body.price;
		let brand=this.ctx.request.body.brand;
		let num=this.ctx.request.body.num;
		let zongjia=this.ctx.request.body.zongjia;
		console.log(zongjia)
		let res=await this.ctx.service.shoppingservice.shoppingadd(name,myimg,price,brand,num,zongjia);
		this.ctx.response.body=res;
		// console.log(res)
}
   async shoppingshow(){
	let id=this.ctx.request.body.id;
	let res=await this.ctx.service.shoppingservice.shoppingshow();
	this.ctx.response.body=res;
	// console.log(res)
}

async shoppingdelete(){
	let id=this.ctx.request.query.id;
	let res=await this.ctx.service.shoppingservice.shoppingdelete(id);
	this.ctx.response.body=res;
	// console.log(res)
}
async shoppingxiugai(){
	let id=this.ctx.request.body.id;
	let num=this.ctx.request.body.num;
	let zongjia=this.ctx.request.body.zongjia;
	let res=await this.ctx.service.shoppingservice.shoppingxiugai(id,num,zongjia);
	// console.log(id,num)
	this.ctx.response.body=res;
	// console.log(res)
}


}

module.exports = shoppingController ;