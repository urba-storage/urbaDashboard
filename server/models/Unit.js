const mongoose = require('mongoose')
const Users = require("../models/Users")

const UnitSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: true
    },
    unitno: {
        type: Number,
        required: true
    },
    customer: {
        type: Users,
        required: false
    }
})

module.exports = mongoose.model("Units", UnitSchema);