const { response } = require('express');

const registerUser = ( req, res = response ) => {
    return res.json({
        ok: true,
        msg: 'Create user /register'
    });
}

const userLogin = (req, res = response) => {
    res.json({
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