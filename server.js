//Express definition
const express = require('express');
const app = express();

//Parser
const bodyParser = require('body-parser');

//API Router
const router = require('./network/routes');

//API DB
const db = require('./database/db');
const url = require('./database/key_uri');

//Port
const port = 3000;

//App definitions
db(url.db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

//Static files
app.use('/app', express.static('public'));

//Deploy server
app.listen(port, () =>{
  console.log('servidor corriendo en el puerto => ... ' + port);
})
