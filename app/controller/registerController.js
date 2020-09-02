'use strict';

const Controller = require('egg').Controller;

class registerController extends Controller {
    async register() {
        let name = this.ctx.request.body.name;
        let phone = this.ctx.request.body.phone;
        let email = this.ctx.request.body.email;
        let pwd = this.ctx.request.body.pwd;
        let r = await this.ctx.service.registerService.register(name,phone,email,pwd);
        this.ctx.response.body = r;
    }
}

module.exports = registerController;