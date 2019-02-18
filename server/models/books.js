import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  authorId: String,
  name: String,
  genre: String,
});

export default mongoose.model('Book', bookSchema);
