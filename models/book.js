const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: {type: String},
    title: { type: String},
    authors: {type: Array},
    publishedDate:  {type: String},
    publisher:  {type: String},
    description: {type: String},
    imageLinks: {type: Object},
    infoLink: {type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;