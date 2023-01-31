// require models which are express, nodemon, cors ...
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
// For Admin
const regisRoutes=require("./routes/register_user")
const registerTutorRoutes=require("./routes/register_tutor")
const loginRoutes=require("./routes/login")





const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://oz:2231874q@cluster0.g4wv7b7.mongodb.net/register?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())

app.use(cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"]
    }));




// SERVER 
const SERVER_PORT =process.env.PORT || 3333
app.listen(SERVER_PORT,()=>{
    console.log("http://localhost:3333/") // // For Admin admin.options.rootpath
    
})




// parse requests of content-type - application/x-www-form-urlencoded
// Bu calismadi
// app.use(express.urlencoded({ extended: true }));


// Route     For Register
app.use("/home/",regisRoutes)
app.use("/home/",loginRoutes)
app.use("/home/",registerTutorRoutes)





