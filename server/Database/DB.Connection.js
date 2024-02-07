const mongoose = require('mongoose');

function DBConnect() {
    const MongoURL = process.env.MONGO_URI;

    mongoose.connect(MongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, "Connection Error !! "));
    db.once('open', function () {
        console.log("DB Connected");
    })
};

module.exports = DBConnect;