const router = require("express").Router();
const userController = require('../Controllers/userController')




router.post("/signup",userController.signup);



module.exports = router;