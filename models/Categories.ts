import mongoose from 'mongoose';
// import Goods from './Goods';
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  categories: [
    {
      name: String,
      _id: {
        type: Schema.Types.ObjectId,
        // ref: mongoose.models.Goods,
      },
      value: String,
    }
  ]
});

// const goodsSchema = new Schema({
//   _id: Schema.Types.ObjectId,
//   brand: String,
//   model: String,
//   price: Number,
//   category_id: {
//     type: Schema.Types.ObjectId,
//     ref: 'Categories',
//   },
// });

// const GoodsModel = mongoose.model('Goods', goodsSchema);
// const CategoriesModel = mongoose.model('goods_categories', categoriesSchema);

// export const Goods = mongoose.models.goods || GoodsModel;
// export const Categories = mongoose.models.goods || CategoriesModel;
// export default mongoose.models.goods || mongoose.model('Goods', goodsSchema);

export default mongoose.models.Categories || mongoose.model('Categories', categoriesSchema, 'goods_categories');
