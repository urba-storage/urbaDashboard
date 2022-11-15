const mongoose = require('mongoose')

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
       }
    // },
    // provider: {
    //     type: ProviderSchema,
    //     required: false
    // }
    
})

const UserModel = mongoose

module.exports = mongoose.model("User", UserSchema);