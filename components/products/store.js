const productsModel = require('./model')

function listProducts(){
  return productsModel.find({ $or: [ { stock: true }, { inStock: true } ] })
}

function listBasePrice(prodName){
  return productsModel.findOne({name:prodName},{price:1, basePrice:1})
}

module.exports = {
  listProducts,
  listBasePrice
}
