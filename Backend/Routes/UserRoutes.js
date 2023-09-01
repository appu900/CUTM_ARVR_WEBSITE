const router = require("express").Router();
const userController = require('../Controllers/userController');
const validateToken = require("../Middlewares/authMiddleWare");

router
    .post("/api/register",userController.registerUser)
    .post("/api/login",userController.login)
    .get("/api/user",validateToken,userController.getUser)


module.exports = router;
