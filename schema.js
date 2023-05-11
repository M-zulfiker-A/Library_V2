import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name:{
    type : "string",
    required : true
  },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  publishers: [{ type: Schema.Types.ObjectId, ref: 'Publisher' }]
});

const publisherSchema = new Schema({
    name:{
        type : "string",
        required : true
      },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }]
});

const bookSchema = new Schema({
  title: String,
  authors: [{ type: Schema.Types.ObjectId, ref: 'Author' }],
  publishers: [{ type: Schema.Types.ObjectId, ref: 'Publisher' }]
});

export const Author = mongoose.model('Author', authorSchema);
export const Publisher = mongoose.model('Publisher', publisherSchema);
export const Book = mongoose.model('Book', bookSchema);


