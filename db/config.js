const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('DB is online');
    }
    catch(err) {
        console.log(err);
        throw new Error('Failed to initialize database');
    }
}

module.exports = {
    dbConnection
}