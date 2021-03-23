interface CategoriesGoods {
  name: string,
  brand: string,
  goods: [{
    brand: string,
    model: string,
    price: number,
    _id: string,
  }],
};

export default CategoriesGoods;