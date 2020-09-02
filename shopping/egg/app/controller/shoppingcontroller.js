const Controller = require('egg').Controller; 

class shoppingController extends Controller {
	//登录
	async shopping() {
	      
			let a=this.ctx.request.body;
			let res=await this.ctx.service.shoppingservice.shopping();
			this.ctx.response.body=res;
			// console.log(res)
	}
	

}

module.exports = shoppingController ;