const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // id: No need to create Id
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model("Book", bookSchema);
