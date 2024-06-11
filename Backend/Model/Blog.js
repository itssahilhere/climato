import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
  tile: {
    type: String,
    required: true
  },
  body: {
    type: String,
    require:true,
  },
  author: {
    type: String,
    required: true
  }
});


const Blog = model('Blog', blogSchema);
export default User;