const ItemSchema = new mongoose.Schema({
    image: {
        type: Image,
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