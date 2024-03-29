const mongoose = require('mongoose')
const Users = require("../models/Users")
const Units = require("../models/Unit")

const ProviderSchema = new mongoose.Schema({
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
    users: {
        type: [Users]
    },
    units: {
        type: [Units]
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    }
    
})

module.exports = mongoose.model("Provider", ProviderSchema);