const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstname  : {
        type : String,
        required: true
    },
    lastname  : {
        type : String,
        required: true
    },
    

    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    department : {
        type : String,
        required: true
    },
    title : {
        type : String,
        required: true
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;