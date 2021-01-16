import Smartphones from '../models/Categories/Smartphones';
import Smartphone from '../models/Goods/Smartphone';

async function getCategoriesGoods() {
  try {
    const data = await Smartphones
    .find({value: 'smartphones'})
    .populate({path: 'goods_id', model: Smartphone});

    console.log(data);

    return JSON.stringify(data);

  } catch {
    return null;
  }
}

export default getCategoriesGoods;
