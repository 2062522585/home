const Service = require('egg').Service;

class UserService extends Service {
	async getAllUser() {

		let sql = `select *  from user where 1 `;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;

	}
}

module.exports = UserService;
