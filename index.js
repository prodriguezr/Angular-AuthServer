const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const { response } = require('express');
const path = require('path');
require('dotenv').config();

// Crear el servidor / aplicación de express
const app = express();

dbConnection();

// Middlewares
app.use(cors());
// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use(express.static('public'));
app.use('/api/auth', require('./routes/auth'));

app.get('*', (req, res = response) => {
    res.sendfile(path.resolve(__dirname, 'public/index.html'))
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});