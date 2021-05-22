const { response } = require('express');
const { validationResult } = require('express-validator');

const registerUser = ( req, res = response ) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { name, email, password } = req.body;
    
    console.log(name, email, password);

    return res.json({
        ok: true,
        msg: 'Create user /register'
    });
}

const userLogin = (req, res = response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    const { email, password } = req.body;
    
    console.log(email, password);

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Renew'
    });
}

module.exports = {
    registerUser,
    userLogin,
    renewToken
};