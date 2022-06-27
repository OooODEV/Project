const mongoose = require('mongoose')
const { Schema } = mongoose

const CryptoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    longname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    change: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    capitalization: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Crypto', CryptoSchema)