import mongoose from 'mongoose';
const { Schema } = mongoose;

const tabletsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  value: String,
  label: String,
  goods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tablet'
    }
  ]
});

export default mongoose.models.Tablets || mongoose.model('Tablets', tabletsSchema, 'goods_categories');
