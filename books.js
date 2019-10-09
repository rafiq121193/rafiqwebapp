const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    book_name: {
        type: String
    }, 
    book_author: {
        type: String
    },

    book_desc: {
        type: String   
    }

    });

module.exports = mongoose.model('Todo',Todo);
