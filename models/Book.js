const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: "String",
    author: "String",
    status: "String",
    pages: "String"
});

module.exports = mongoose.model('Book', BookSchema);