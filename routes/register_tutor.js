const express =require("express");
const { now } = require("mongoose");
const { date } = require("yup");
// const { update } = require("../models/register_db");
const routes = express.Router()
const registerTutorModel =require("../models/tutor_db")



// GET DATA
routes.get("/register/tutor/result",async(req,res)=>{
    try {
        const data = await registerTutorModel.find();
        res.status(201).json(data)
        console.log("Display all data")
        
    } catch (error) {
        res.status(500).json({message:"it didn't go through, please try again"})
       
    }
})

// REGISTER OR INSERT DATA

routes.post("/register/tutor",async(req,res)=>{

    const add_register = new registerTutorModel({
        
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    
    })
    try {
        const save_register= await add_register.save()
        res.status(201).json(save_register)
        console.log("insert")
        
    } catch (error) {
        res.status(400).json({message:"it didn't go through, please try again"})
        
    }
})

// FindById
routes.get("/register/tutor/:id",async(req,res)=>{
    try {
        const id=req.params.id
        const byDataid=await registerTutorModel.findById(id)
        res.status(201).json(byDataid)
        console.log("id took it")
        
    } catch (error) {
        res.status(500).json({message: "it didn't go through, please try again"})
    }

})

// Update

routes.patch("/register/tutor/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const updateData=req.body;
        const options ={new:true};
        const result=await registerTutorModel.findOneAndUpdate(id,updateData,options)
        res.status(201).json(result)
        console.log("id updated it")
        
    } catch (error) {
        res.status(500).json({message: "it didn't go through, please try again"})
    }

})



// Delete

routes.delete("/register/tutor/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const result=await registerTutorModel.findByIdAndDelete(id)
        res.status(201).json(result)
        console.log("id has been deleted it")
        
    } catch (error) {
        res.status(500).json({message: "it didn't go through, please try again"})
    }

})





module.exports=routes