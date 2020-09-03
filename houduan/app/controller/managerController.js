'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async adlogin() {
      let username=this.ctx.request.body.username;
      let pwd = this.ctx.request.body.pwd;
      let managerArray=await this.ctx.service.managerService.adlogin(username,pwd);
      this.ctx.response.body = managerArray;



    // const { ctx } = this;
	  // ctx.body=await this.ctx.service.adloginService.adlogin(ctx.request.body);


  }
  
  

}

module.exports = ManagerController;
