const mongoose = require('mongoose')

const logInSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isVeryfied: Boolean,
})

const logInModel = new mongoose.model("logInUser", logInSchema);

module.exports = logInModel;
