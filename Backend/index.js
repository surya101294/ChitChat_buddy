require("dotenv").config();
const express= require("express");
const { Connection } = require("./Configuration/db");
const cors= require("cors");
const { authMiddleWare } = require("./Middlewares/Authentication");
const { UserRouter } = require("./Routes/UserRoutes");
const app = express();
app.use(express.json())

// middleware
app.use(cors());
// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));


const PORT = process.env.PORT;



// app.use(authMiddleWare)

// app.use('/auth', AuthRoute);
app.use('/user', UserRouter)



app.listen(PORT, async()=>{
    try{
        await Connection
        console.log(`Listening at Port ${PORT}`)
    }
    catch(err){
        console.log(`${error} did not connect`)
    }
})