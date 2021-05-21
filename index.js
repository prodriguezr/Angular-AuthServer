const express = require('express');

// Crear el servidor / aplicación de express
const app = express();

// GET
app.get('/', (req, res) => {
    res.json({ ok: true, msg: 'Is OK', uid: 12345 });
});


app.listen(4000, () => {
    console.log(`Server running on port ${4000}`);
});