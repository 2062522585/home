const Service = require('egg').Service;

class UserinfoService extends Service {
	async getUserinfo(username) {
		let sql = "select * from user where username=?";
		let userArr = await this.ctx.app.mysql.query(sql, [username]);
		return userArr;
	}
	async updateUname(newname,id) {
		let sql = "update user set name=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newname,newname]);
		return r.affectedRows;//1
	}
}

module.exports = UserinfoService;
