const express= require("express")
const { getAllUsers, getUser, adduser } = require("../Controllers/UserContoller")

const UserRouter= express.Router()

UserRouter.get('/',getAllUsers)
UserRouter.get('/:id',getUser)
UserRouter.post("/register", adduser)


module.exports={UserRouter}