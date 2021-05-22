const { response } = require('express');
const User = require('../models/User');

const registerUser = async( req, res = response ) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User with these email already exists'
            });
        }

        // Create user from model
        const dbUser = new User(req.body);

        // Verify email

        // Hash password

        // Generate the JWT

        // Save 
        await dbUser.save();

        // Generate successfull response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        });
    } catch (error) {        
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Please contact the Administrator',
        });
    }
}

const userLogin = (req, res = response) => {
    const { email, password } = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
}

const renewToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    });
}

module.exports = {
    registerUser,
    userLogin,
    renewToken
};