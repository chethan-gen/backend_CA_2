const express = require("express");
const routes = express.Router();
const User = require("./schema");

routes.post("/signUp",async(req,res)=>{
    try {
        const{userName,email,password,dateOfBirth} = req.body;
    if(!userName){
        return res.status(400).send("UserName cannot be empty")
    }
    else if(!email){
        return  res.status(400).send("Email cannot be empty")
    }
    else if(password.length<8 || password.length>16 || !password){
        return res.status(400).send("The Password length should be greater than 8 or less than or equal to 16")
    }
    const newUser = new User({
        userName,
        email,
        password,
        dateOfBirth
    })
    const savedUser = await newUser.save();
    if(!savedUser){
        res.status(400).send("The User is not created")
    }
    res.status(200).send({message:"The user is created successfully",savedUser})
    } catch (error) {
        res.status(500).send("Something went wrong",error)
    }
})

module.exports = routes