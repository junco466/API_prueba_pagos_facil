const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')

const router = express.Router();

//:user_id/:nombre_producto
//METODO HTTP GET
router.get('/:user_id/:nombre_producto', (req, res) => {

  //console.log(req.params.user_id,req.params.nombre_producto)
  controller.specialClients(req.params.user_id,req.params.nombre_producto)
  .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500 ,e)
    })
});

module.exports = router;
