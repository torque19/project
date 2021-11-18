const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRegistrationschema = new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true
    },
    NewPassword:{
        type:String,
        required:true,
        
    },
    ConfirmPassword:{
        type:String,
        required:true
    },
    St:{
        type:String,
        required:true
    },
    registration_date:{
        type:String,
        default: Date.now,
    },

})



userRegistrationschema.pre("save", async function(next){
    if(this.isModified("Password")){
        console.log(`theCurrent is ${this.Password}`);
        this.Password = await bcrypt.hash(this.Password, 10);
        console.log(`theCurrent is ${this.Password}`);
    }
    next();
    
})

const Registration = new mongoose.model("Registration", userRegistrationschema);
module.exports = Registration;