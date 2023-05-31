const mongoose = require('mongoose')
const productSchema = require('./productSchema')
const productModel = mongoose.model('products', productSchema)

module.exports = productModel