require("dotenv").config()
const mongoose= require("mongoose")

const Connection= mongoose.connect(process.env.MONGODB_CONNECTION)

module.exports={Connection}