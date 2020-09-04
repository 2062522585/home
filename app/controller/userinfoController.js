const Controller = require('egg').Controller;

class UserinfoController extends Controller {
	async showAllinfo() {
		let username = this.ctx.request.body.username;
		let list = await this.ctx.service.userinfoService.getUserinfo(username);
		this.ctx.response.body = list;
	}
	async updateName() {
		let newname = this.ctx.request.body.newname;
		let id = this.ctx.request.body.id;
		let r = await this.ctx.service.userinfoService.updateUname(newname,id);
		this.ctx.response.body = r;
	}
  async updateTel() {
		let newtel = this.ctx.request.body.newtel;
		let id = this.ctx.request.body.id;
		let r = await this.ctx.service.userinfoService.updateUtel(newtel,id);
		this.ctx.response.body = r;
	}
	async updateAdr() {
		let newadr = this.ctx.request.body.newadr;
		let id = this.ctx.request.body.id;
		let r = await this.ctx.service.userinfoService.updateUadr(newadr,id);
		this.ctx.response.body = r;
	}
	async updateMail() {
		let newmail = this.ctx.request.body.newmail;
		let id = this.ctx.request.body.id;
		let r = await this.ctx.service.userinfoService.updateUmail(newmail,id);
		this.ctx.response.body = r;
	}
}

module.exports = UserinfoController;