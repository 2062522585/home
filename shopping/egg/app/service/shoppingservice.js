const Service = require('egg').Service;

class shoppingService extends Service {
	//登陆,根据账号和密码进行登陆
	async shopping() {
	
		let sql = `select * from shopping`;
		let result=await this.app.mysql.query(sql)
		return result
	
	
		
		}
			
	}
	
	


module.exports = shoppingService;
