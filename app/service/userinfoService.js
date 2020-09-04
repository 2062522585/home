const Service = require('egg').Service;

class UserinfoService extends Service {
	async getUserinfo(username) {
		let sql = "select * from user where username=?";
		let userArr = await this.ctx.app.mysql.query(sql, [username]);
		return userArr;
	}
	async updateUname(newname,id) {
		let sql = "update user set username=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newname,id]);
		return r.affectedRows;//1
	}
	async updateUtel(newtel,id) {
		let sql = "update user set tel=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newtel,id]);
		return r.affectedRows;//1
	}
	async updateUadr(newadr,id) {
		let sql = "update user set address=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newadr,id]);
		return r.affectedRows;//1
	}
	async updateUmail(newmail,id) {
		let sql = "update user set mail=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newmail,id]);
		return r.affectedRows;//1
	}
}

module.exports = UserinfoService;
