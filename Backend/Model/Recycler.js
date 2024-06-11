import { Schema, model } from 'mongoose';

const recyclerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});


const Recycler = model('Recycler', recyclerSchema);
export default Recycler;
