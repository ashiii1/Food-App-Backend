const express= require("express");
const { register, login } = require("../controller/user.controller");
const { authCallback } = require("../controller/auth.controller");

const userRouter= express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/auth", authCallback)


module.exports={
    userRouter
}