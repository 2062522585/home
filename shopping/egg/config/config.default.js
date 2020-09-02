//cookie配置
exports.keys = "sdfdshlkfdsakdfsahdsfakjfhasfkdsa";

//post配置
exports.security = {
  csrf: false
};

exports.multipart = {
	mode: 'file',
};
//加上后post请求才能成功,文件上传才能成功 1
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};
//mysql配置
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'zjf19981105',
    database: 'ssss',
  },
};

//跨域配置
exports.cors = {
	  origin: '*',
	  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
