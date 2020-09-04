const Service = require('egg').Service;
class ProductsService extends Service{
	async select(kw){
		let sql = "select * from product where keyword=?";
		let List = await this.ctx.app.mysql.query(sql,[kw]);
		return List;
	}
	async getPro(obj) {
		var sql = `select *  from product where 1 `;
			if (obj.keyword) {
				sql += `and keyword like '%${obj.keyword}%' limit 4`;			
			}
			var result = await this.app.mysql.query(sql);
			return result;

	}
  async getSort(obj) {
		var sql = `select *  from classify`;
		var result = await this.app.mysql.query(sql);
		return result;
	
	}
}
module.exports = ProductsService;