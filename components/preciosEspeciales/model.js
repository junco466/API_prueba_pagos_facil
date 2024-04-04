const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
  
  id: Number,
  nombre: String,
  email: String,
  password: String,
  role: String,
  status: Number,
  metadata : {
    precios_especiales: [
      {
        nombre_producto: String,
        precio_especial_personal: Schema.Types.Mixed,
      }  
    ]
  }
  }, {collection:'users'});


const model = mongoose.model('Price', PriceSchema)

module.exports = model;
