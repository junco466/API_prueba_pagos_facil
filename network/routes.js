const express = require('express');
const precios = require('../components/preciosEspeciales/network')
const products = require('../components/products/network')

const routes = function(server){
  server.use('/price', precios)
  server.use('/products', products)
}

module.exports = routes;
