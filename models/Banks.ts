import mongoose from 'mongoose';
const { Schema } = mongoose;

const banksSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  term: Number,
  rate: Number,
  commission: Number,
});

export default mongoose.models.Banks || mongoose.model('Banks', banksSchema, 'banks');