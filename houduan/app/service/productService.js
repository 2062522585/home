const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");

class ProductService extends Service {
	//查询商品
	async getAllProduct() {

		let sql = `select *  from product where 1 `;
		let result = await this.ctx.app.mysql.query(sql,[]);

		return result;
	}

	//删除商品
	async delById(id){
        let sql = "delete from product where id=?";
        let r = await this.ctx.app.mysql.query(sql,[id]);
        console.log(r.affectedRows)
        return r.affectedRows;
    }
	//上传商品
    async uploadFile(brand,name,price,keyword,msg,fileSrc) {
        let sql = `insert into product(brand,name,price,keyword,msg,myimg)values(?,?,?,?,?,?)`;
		let result = await this.ctx.app.mysql.query(sql,[brand,name,price,keyword,msg,fileSrc]);

		return result.affectedRows;
    }

	// 上传图片地址
	async uploadImg() {
		console.log(this.ctx.request.files)
		const file = this.ctx.request.files[0];
		const toFileName = '/public/upload/'+Date.now()+file.filename;
	   
		let to = path.dirname(__dirname)+toFileName;
		
		await fs.copyFileSync(file.filepath, to);
		
		await fs.unlinkSync(file.filepath);
	  
		//上传文件的网络访问 url
		const newUrl = "http://localhost:8000"+toFileName;
		// const sql = "insert into product(myimg) values(?)"
		// let r = await this.ctx.app.mysql.query(sql,[newUrl])
		// r.newUrl=newUrl
		//返回文件的网络访问 url
		return newUrl;

		}

	//修改商品信息
    async updateProduct(id,newbrand,newname,newprice,newkeyword,newmsg){
        let sql = "update product set brand=?,name=?,price=?,keyword=?,msg=? where id=?";
        let r = await this.ctx.app.mysql.query(sql,[newbrand,newname,newprice,newkeyword,newmsg,id]);
        return r.affectedRows;
    }
}

module.exports = ProductService;
