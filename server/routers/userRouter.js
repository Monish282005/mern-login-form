const express=require("express");
const router=express.Router();
const userControllers=require("../controllers/userController");

router.post("/signup",userControllers.handleSignup);
router.post("/login",userControllers.handleLogin);

module.exports=router;