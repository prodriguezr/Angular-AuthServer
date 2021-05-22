const { Router } = require('express');
const { check } = require('express-validator');

const { registerUser, userLogin, renewToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post('/register', [
    check('name', 'Name field is required').not().isEmpty(),
    check('email', 'Email field is required').isEmail(),
    check('password', 'Password field is required and must be at least 6 characters long').isLength({ min: 6 }),

], registerUser);

// Login de usuario
router.post('/', [
    check('email', 'Email field is required').isEmail(),
    check('password', 'Password field is required and must be at least 6 characters long').isLength({ min: 6 }),
]
, userLogin);

// Validar y revalidar token
router.get('/renew', renewToken);

module.exports = router;