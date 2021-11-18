const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const casesDetailsschema = new mongoose.Schema({
    Case_no:{
        type:String,
        required:true,
    },
    Prisioner_no:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Fname:{
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
    Street1:{
        type:String,
        required:true
    },
    state_i:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Note:{
        type:String,
        required:true,
    },
    registration_date:{
        type:String,
        default: Date.now,
    },
})

const Case_Registration = new mongoose.model("Case_Registration", casesDetailsschema);
module.exports = Case_Registration;