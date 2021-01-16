import mongoose from 'mongoose';
const { Schema } = mongoose;

const goodsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  price: Number,
  category_id: {
    type: Schema.Types.ObjectId,
    ref: mongoose.models.Categories,
  },
});

export default mongoose.models.Goods || mongoose.model('Goods', goodsSchema, 'goods');