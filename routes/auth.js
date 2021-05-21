const { Router } = require('express');

const { registerUser, userLogin, renewToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post('/register', registerUser);

// Login de usuario
router.post('/', userLogin);

// Validar y revalidar token
router.get('/renew', renewToken);

module.exports = router;