const { response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-api-key');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'x-api-key is not present',
        });
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        console.log(`uid: ${uid} / name: ${name}`);        

        req.uid = uid;
        req.name = name;
    } catch (err) {
        return res.status(401).json({
            ok: false,
            msg: 'x-api-key is not present or error',
        });
    }

    next();
}

module.exports = {
    validateJWT
}