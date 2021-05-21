const { Router } = require('express');

const router = Router();

// Crear un nuevo usuario
router.post('/register', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'Create user /register'
    });
});

// Login de usuario
router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
});

// Validar y revalidar token
router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'Renew'
    });
});

module.exports = router;