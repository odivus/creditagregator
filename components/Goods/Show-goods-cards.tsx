import GoodsCard from '../Goods-card/Goods-card';
import GoodsAdded from '../../Interfaces/GoodsAdded';

interface Props {
  goodsAdded: Array<GoodsAdded>;
  userGoodsAdded: number;
  setGoodsAdded: {
    id: string,
    selected_goods: GoodsAdded,
  }
  setGoodsPriceSum: (state: number) => void;
}

function ShowGoodsCards(props: Props) {
  const {
    goodsAdded, 
    userGoodsAdded, 
    setGoodsAdded,
    setGoodsPriceSum
  } = props;

  return (
    goodsAdded
      .map((goodsItem, index) => (
        <GoodsCard
          key={goodsItem._id}
          {...{
            goodsAddedIndex: index + 1,
            ...goodsItem,
            index,
            goodsAdded,
            userGoodsAdded,
            setGoodsAdded,
            setGoodsPriceSum,
          }}
        />)
      )
      .reverse()
    );
}

export default ShowGoodsCards;