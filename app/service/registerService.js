const Service = require('egg').Service;

class registerService extends Service {
  async register(name,phone,email,pwd) {
    let sql = "insert into user (username,password,tel,mail) values (?,?,?,?)"
    let r = await this.ctx.app.mysql.query(sql, [name,pwd,phone,email])
    return r.affectedRows
  
  }
}

module.exports = registerService;