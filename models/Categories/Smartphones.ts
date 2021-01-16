import mongoose from 'mongoose';
const { Schema } = mongoose;

const smartPhonesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  value: String,
  label: String,
  goods_id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Smartphone'
    }
  ]
});

export default mongoose.models.Smartphones || mongoose.model('Smartphones', smartPhonesSchema, 'goods_categories');
