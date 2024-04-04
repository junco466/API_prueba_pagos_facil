const productsModel = require('./model')

function listSpecialPrices(Pid){
  return productsModel.findOne({ id: Pid})

}

module.exports = {
  listSpecialPrices,
}
