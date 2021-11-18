const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const criminalsDetailsschema = new mongoose.Schema({
    Criminal_ID:{
        type:Number,
        required:true,
    },
    Case_ID:{
        type:Number,
        required:true,
    },
    Investigation_incharge:{
        type:String,
        required:true
    },
    Case_type:{
        type:String,
        required:true,
    },
    Weapon_used:{
        type:String,
        required:true,
        
    },
    Height:{
        type:Number,
        required:true,
    },
    Identification_marks:{
        type:String,
        required:true,
    },
    Punishment_note:{
        type:String,
        required:true,
    },
    Street1:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Additional_Detail:{
        type:String,
        required:true,
    },
    registration_date:{
        type:String,
        default: Date.now,
    },
})

const Criminals_Registration = new mongoose.model("Criminals_Registration", criminalsDetailsschema);
module.exports = Criminals_Registration;