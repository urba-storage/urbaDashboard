const UnitSchema = new mongoose.Schema({
    size: {
        type: Number,
        required: true
    },
    unitno: {
        type: Number,
        required: true
    }

})