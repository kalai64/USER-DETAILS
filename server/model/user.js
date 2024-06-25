const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    age:String,
    email:String
})

const usermodel = mongoose.model('users', UserSchema)
module.exports = usermodel
