const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Item", ItemSchema);