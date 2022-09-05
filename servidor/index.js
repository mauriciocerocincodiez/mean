const express = require("express");

const cors = require("cors");

const conectarDB = require('./config/db');

const app = express();

//conectamos a base de datos
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/', require('./router/producto'));

app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente');
})