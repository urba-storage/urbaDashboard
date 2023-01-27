const mongoose = require('mongoose'), Schema = mongoose.Schema;
const UserModel = require('./Users');

const DeliverySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: false
    },

    time: {
        type: String,
        required: false
    },

    destination: {
        type: String,
        required: true
    },

    source: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: false
    },

    packinghelp: {
        type: Boolean,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

const DeliveryModel = mongoose.model("deliveries", DeliverySchema)
module.exports = DeliveryModel