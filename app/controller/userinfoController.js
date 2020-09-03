const Controller = require('egg').Controller;

class UserinfoController extends Controller {
	async showAllinfo() {
		let username = this.ctx.request.body.username;
		let list = await this.ctx.service.userinfoService.getUserinfo(username);
		this.ctx.response.body = list;
	}
	async updateName() {
		let newname = this.ctx.request.body.newname;
		let r = await this.ctx.service.userinfoService.updateUname(newname);
		this.ctx.response.body = r;
	}
}

module.exports = UserinfoController;