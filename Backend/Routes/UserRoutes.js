const router = require("express").Router();
const userController = require("../Controllers/userController");

router
  .post("/signup", userController.signup)
  .post("/signin", userController.signin)
  .get("/user", userController.verifyToken, userController.getUser)
  

module.exports = router;
