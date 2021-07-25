import GoodsAdded from './GoodsAdded';

type goodsAdded = Array<GoodsAdded>;

interface GoodsCardProps {
  key?: string;
  goodsAdded: goodsAdded;
  userGoodsAdded: {
    id: string,
    selected_goods: goodsAdded
  };
  setGoodsAdded: (state: goodsAdded) => void;
  setGoodsPriceSum: (state: number) => void;
  goodsAddedIndex: number;
  category?: string;
  quantity: number;
  brand: string;
  model: string;
  price: number;
  index: number;
  _id: string;
}

export default GoodsCardProps;