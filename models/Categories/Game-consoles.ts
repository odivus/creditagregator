import mongoose from 'mongoose';
const { Schema } = mongoose;

const gameConsolesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  value: String,
  label: String,
  goods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'GameConsole'
    }
  ]
});

export default mongoose.models.GameConsoles || mongoose.model('GameConsoles', gameConsolesSchema, 'goods_categories');
