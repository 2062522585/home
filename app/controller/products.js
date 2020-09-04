const Controller = require('egg').Controller;
class ProductsController extends Controller{
	async select(){
		let keyword = this.ctx.request.query.keyword;
		let List = await this.ctx.service.products.select(keyword);
		this.ctx.response.body = List;
	}
	async getPro() {
	  const { ctx } = this;
	  ctx.body=await this.ctx.service.products.getPro(ctx.request.query);
	}
  async getSort() {
	  const { ctx } = this;
	  ctx.body=await this.ctx.service.products.getSort();
	}
}
module.exports = ProductsController;