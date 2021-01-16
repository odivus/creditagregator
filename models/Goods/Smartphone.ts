import mongoose from 'mongoose';
const { Schema } = mongoose;

const smartPhoneSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.models.Smartphone || mongoose.model('Smartphone', smartPhoneSchema, 'goods');
