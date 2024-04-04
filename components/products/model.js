const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
      name: String,
      brand: Schema.Types.Mixed,
      price: Number,
      basePrice: Number,
      specialPrice: Schema.Types.Mixed,
      stock: Boolean,
      inStock: Boolean,
    },{collection: 'products'});


const model = mongoose.model('Products', ProductsSchema)

module.exports = model;
