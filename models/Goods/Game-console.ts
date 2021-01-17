import mongoose from 'mongoose';
const { Schema } = mongoose;

const gameConsoleSchema = new Schema({
  _id: Schema.Types.ObjectId,
  brand: String,
  model: String,
  price: Number,
});

export default mongoose.models.GameConsole || mongoose.model('GameConsole', gameConsoleSchema, 'goods');
