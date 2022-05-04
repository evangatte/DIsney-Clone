const mongoose = require('mongoose');
const { Schema } = mongoose;
let db;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
});

exports.UserModel = mongoose.model('User', UserSchema);

const ProductSchema = new Schema({
    ID: String,
    name: String,
});
exports.ProductModel = mongoose.model('Product', ProductSchema);

exports.setup = function setup() {
    if (db) {
        return;
    }

    const mongoDB = 'mongodb://127.0.0.1/my_database';
    mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

    // Get the default connection
    db = mongoose.connection;

    // Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};
