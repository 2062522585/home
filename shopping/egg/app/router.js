//router.js
module.exports = app=> {
	const { router, controller } = app;
	router.post('/shopping',controller.shoppingcontroller.shopping); 
           
};
