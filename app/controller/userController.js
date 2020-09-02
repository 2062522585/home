'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async userlogin() {
        let username = this.ctx.request.body.username;
        let password = this.ctx.request.body.password;
        let userArray = await this.ctx.service.userService.userlogin(username, password);
        this.ctx.response.body = userArray;
    }
}

module.exports = UserController;