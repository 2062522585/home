
const Service = require('egg').Service;

class ManagerService extends Service {
  async adlogin(username,pwd) {
      let sql="select * from manager where username=?"  
      let list=await this.ctx.app.mysql.query(sql,[username])
      // return list;

      // var result=await this.ctx.app.mysql.query("select * from manager where username=?",[username]);
      // return result;
      if(list.length<1){
          return{
            status:1,
            msg:"账号不存在"
          }
      }else{
        if(pwd==list[0].pwd){
          return{
            status:0,
            msg:"登录成功"
          }
        }else{
          return{
            status:1,
            msg:"密码错误"
          }
        }
      }
    }
  
  
  
}

module.exports = ManagerService;