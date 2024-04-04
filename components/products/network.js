const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();


//METODO HTTP GET
router.get('/', (req, res) => {

  controller.listStockProducts()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500 ,e)
    })
});

module.exports = router;
