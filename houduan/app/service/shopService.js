


const Service = require('egg').Service;

class ShopService extends Service {
    async getAllShop() {

		let sql = `select *  from shopping where 1 `;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;

	}
  
}

module.exports = ShopService;