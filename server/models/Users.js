const mongoose = require('mongoose')
// const Provider = require("../models/Providers")

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
       },
    phoneno: {
        type: String,
        required: false
    },
    provider: {
        type: String,
        required: false
    }
    
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel