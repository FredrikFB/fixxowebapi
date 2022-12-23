const mongoose = require('mongoose')

//hur en product ska se ut i databasen
const productSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String},
    tag: {type: String},
    imageName: {type: String},
    rating: {type: Number},
})
module.exports = mongoose.model('products', productSchema)