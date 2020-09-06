const Service = require('egg').Service;

class shoppingService extends Service {
	//登陆,根据账号和密码进行登陆
	async shopping(id) {

		let sql = `select * from product where id=?`;
		let result = await this.ctx.app.mysql.query(sql, [id])
		return result
	}

	async shoppingadd(name, myimg, price, brand, num, zongjia, userid) {

		let sql = "insert into shopping(name,myimg,price,brand,num,zongjia,userid)values(?,?,?,?,?,?,?)"
		let r = await this.ctx.app.mysql.query(sql, [name, myimg, price, brand, num, zongjia, userid]);
		return r.affectedRows;
	}

	async shoppingshow(userid) {
		let sql = `select * from shopping where userid=?`;
		let result = await this.ctx.app.mysql.query(sql, [userid])
		return result
	}

	async shoppingdelete(id) {
		let sql = "delete from shopping where id=?";
		let r = await this.ctx.app.mysql.query(sql, [id]);
		//   console.log(id)
		return r.affectedRows;
	}
	async shoppingxiugai(id, num, zongjia) {

		let sql = `update shopping set num=${num},zongjia=${zongjia} where id=${id}`;
		// let 
		// console.log(sql)
		let list = await this.ctx.app.mysql.query(sql, [id, num]);
		//  console.log(list)
		return list; //[], [{no:23}]
	}
	async shoppingclear(id) {
		let sql = "delete from shopping";
		let r = await this.ctx.app.mysql.query(sql, []);
		//   console.log(id)
		return r.affectedRows;
	}

}




module.exports = shoppingService;
