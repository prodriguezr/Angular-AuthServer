const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const registerUser = async( req, res = response ) => {
    const { name, email, password } = req.body;

    try {
        // Verify email
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User with these email already exists'
            });
        }

        // Create user from model
        const dbUser = new User(req.body);

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generate the JWT
        const token = await generateJWT(dbUser.id, dbUser.name);

        // Save 
        await dbUser.save();

        // Generate successfull response
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token,
        });
    } catch (err) {        
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Please contact the Administrator',
        });
    }
}

const userLogin = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const dbUser = await User.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'Email or password are incorrect',
            });
        }

        // Validate password
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password is invalid',
            });
        }

        // Generate the JWT
        const token = await generateJWT(dbUser.id, dbUser.name);

        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            ok: false,
            msg: 'Please contact the Administrator',
        });
    }
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