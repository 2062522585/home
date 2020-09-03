module.exports = app => {
	const { router, controller } = app;

	router.post('/userlogin', controller.userController.userlogin);
	router.post('/register', controller.registerController.register);
	router.post('/shopping', controller.shoppingcontroller.shopping);
	router.post('/shoppingadd', controller.shoppingcontroller.shoppingadd);
	router.post('/shoppingshow', controller.shoppingcontroller.shoppingshow);
	router.get('/shoppingdelete', controller.shoppingcontroller.shoppingdelete);
	router.post('/shoppingxiugai', controller.shoppingcontroller.shoppingxiugai);
	router.get('/selectproduct', controller.products.select);
	router.get('/getpro', controller.products.getPro);
	router.post('/updateName', controller.userinfoController.updateName)

};