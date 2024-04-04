const store = require('./store');


//Funcion para el metodo HTTP GET
async function listStockProducts(){
  
  let data = await store.listProducts();
  //console.log(data);
  return data;
}

async function basePrice(prodName){
  
  let data = await store.listBasePrice(prodName);
  //console.log(data);
  return data;
}

module.exports = {
  listStockProducts,
  basePrice
}
