const Controller = require('egg').Controller; 

class UserinfoController extends Controller {
	async showAllClazz() {
		let list = await this.ctx.service.userinfoService.getAllClazz();
		//[{id:1,name:'小二班',major:'情歌'},{id:1,name:'地表..',major:'流行'}]
		this.ctx.response.body = list;
	}
	// async updateName() {
	// 	let id = this.ctx.request.body.id;
	// 	let newname = this.ctx.request.body.newname;
	// 	let r = await this.ctx.service.clazzService.updateName(id, newname);
	// 	this.ctx.response.body = r;
	// }
}

module.exports = UserinfoController;