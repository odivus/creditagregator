import mongoose from 'mongoose';
const { Schema } = mongoose;

const tabletSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.models.Tablet || mongoose.model('Tablet', tabletSchema, 'goods');
