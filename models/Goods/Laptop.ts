import mongoose from 'mongoose';
const { Schema } = mongoose;

const laptopSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.models.Laptop || mongoose.model('Laptop', laptopSchema, 'goods');
