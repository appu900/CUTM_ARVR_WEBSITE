const router = require("express").Router();
const userController = require('../Controllers/userController')




router
      .post("/signup",userController.signup)
      .post("/signin",userController.signin)
    //   .get("/user",)



module.exports = router;