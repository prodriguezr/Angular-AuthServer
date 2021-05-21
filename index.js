const express = require('express');

// Crear el servidor / aplicación de express
const app = express();

// Middlewares
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Server running on port ${4000}`);
});