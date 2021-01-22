import mongoose from 'mongoose';
const { Schema } = mongoose;

const laptopsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  value: String,
  label: String,
  goods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Laptop'
    }
  ]
});

export default mongoose.models.Laptops || mongoose.model('Laptops', laptopsSchema, 'goods_categories');
