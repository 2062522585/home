const Service = require('egg').Service;

class UserinfoService extends Service {
	async getUserinfo(no, pwd) {
		let sql = "select username,password,tel,mail from user";
		let userArr = await this.ctx.app.mysql.query(sql, []);
		return userArr;
	}
	// async updateName(id, newname) {
	// 	let sql = "update clazz set name=? where id=?";
	// 	let r = await this.ctx.app.mysql.query(sql, [newname, id]);
	// 	return r.affectedRows;//1
	// }
}

module.exports = UserinfoService;
