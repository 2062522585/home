'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  router.post('/adlogin', controller.managerController.adlogin);
  //查询所有商品
  router.get('/getAllProduct', controller.productController.getAllProduct);
  
  //商品上传
  router.post('/uploadFile', controller.productController.uploadFile);

  //上传图片
  router.post('/uploadImg', controller.productController.uploadImg);

  //删除商品
  router.get("/delById", controller.productController.delById);

  //修改商品信息
  router.post("/updateProduct", controller.productController.updateProduct);

  //查询所有用户信息
  router.get('/getAllUser', controller.userController.getAllUser);

  //查询所有购物车信息
  router.get('/getAllShop', controller.shopController.getAllShop);
  
 
};
