const Book = require('../models/Book');
const mongoose = require('mongoose');

module.exports = {
    async store(req, res){
        console.log('Salvando book');
        
        const data = req.body;
        book = await Book.create(data);
        return res.json(data);
    },
    async index(req, res){
        const books = await Book.find({ });
        return res.json(books);
    },
    async delete(req, res, next){
        console.log(req.params);
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return next(new Error('ObjectId inválido.'));
          }
      
          Book.remove({ _id: req.params.id }, (err) => {
            if (err) return next(err);
            res.status(200).json({});
          })    
    }
}