'use strict';

const Controller = require('egg').Controller;

class ShopController extends Controller {
  async getAllShop() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.shopService.getAllShop(ctx.request.query);

	
  }
  
  

}

module.exports = ShopController;
