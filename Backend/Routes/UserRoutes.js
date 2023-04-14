const express= require("express")
const { getAllUsers, getUser, adduser, deleteUser } = require("../Controllers/UserContoller")

const UserRouter= express.Router()

UserRouter.get('/',getAllUsers)
UserRouter.delete('/delete/:id', deleteUser)
UserRouter.get('/:id',getUser)
UserRouter.post("/register", adduser)


module.exports={UserRouter}
