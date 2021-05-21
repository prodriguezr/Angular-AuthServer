const express = require('express');
const cors = require('cors');

// Crear el servidor / aplicación de express
const app = express();

// Middlewares
app.use(cors());
// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Server running on port ${4000}`);
});