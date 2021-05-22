const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
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

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});