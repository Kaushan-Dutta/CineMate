const router=require('express').Router();
const AuthController=require('../Controllers/authController');

router.route('/auth').post(AuthController.Authentication,AuthController.Register);

module.exports=router;
