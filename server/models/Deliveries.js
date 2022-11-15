const { default: mongoose } = require("mongoose")

const DeliverySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },

    time: {
        type: time,
        required: true
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
        required: true
    },

    packinghelp: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Delivery", DeliverySchema);