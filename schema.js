const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:16
    },
    dateOfBirth:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",schema)
module.exports = User;