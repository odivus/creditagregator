interface GoodsAdded {
  _id: string;
  price: number;
  quantity: number;
  model: string;
  category ?: string;
  brand: string;
}

export default GoodsAdded;