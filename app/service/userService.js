
const Service = require('egg').Service;

class UserService extends Service {
  async userlogin(username, password) {
    let sql = "select * from user where username=? and password=?"
    let list = await this.ctx.app.mysql.query(sql, [username, password])

    return list
  
  }



}

module.exports = UserService;