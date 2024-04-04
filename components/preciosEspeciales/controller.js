const store = require('./store');
const { basePrice } = require('../products/controller')


//Funcion para el metodo HTTP GET
async function specialClients(id, nombreProducto){
  
  try {
    let data = await store.listSpecialPrices(id);
    let newData = {}
    let flag = false
  
    const preciosEspeciales = data.metadata.precios_especiales;
    //console.log(preciosEspeciales);
    //console.log(data.nombre)
  
      // Utilizamos la información en nuestro algoritmo
      for (precioEspecial of preciosEspeciales){
        //console.log(precioEspecial.nombre_producto)
        if (precioEspecial.nombre_producto == nombreProducto){
          
          newData = {
            nombre : data.nombre,
            id : data.id,
            nombre_producto: precioEspecial.nombre_producto,
            precios_especial_personal: precioEspecial.precio_especial_personal,
          }
          flag = true
          break
        }
      }
  
      if (flag) {
        //console.log(newData)
        return newData
      }else{
        let dataProduct = await basePrice(nombreProducto)
        let precioBase = dataProduct.price ? dataProduct.price : dataProduct.basePrice ? dataProduct.basePrice : "no tiene precio"
        newData = {
          nombre : data.nombre,
          id : data.id,
          nombre_producto: nombreProducto,
          basePrice: precioBase,
          }
        //console.log(newData)
        return newData
      }
  }catch{
    return {message: 'No existe el ID o el producto'}
  }

}

module.exports = {
  specialClients,
}
