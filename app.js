var express = require("express")
var cors = require("cors")
var dotenv=require("dotenv")
dotenv.config();
require("./connection")

var port=process.env.PORT;

var app=express();


const userRoute=require("./routes/userRoute")

app.use(express.json())

app.use(cors())

app.use('/api',userRoute)

app.listen(port,()=>{
    console.log(`Server is up and Running ${port}`)
})
