'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getAllUser() {
    const { ctx } = this;

	ctx.body=await this.ctx.service.userService.getAllUser(ctx.request.query);

	
  }
 
}

module.exports = UserController;
