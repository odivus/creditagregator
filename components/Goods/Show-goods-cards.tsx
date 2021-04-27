import GoodsCard from '../Goods-card/Goods-card';

function showGoodsCards(
    goodsAdded,
    userGoodsAdded, 
    setGoodsAdded, 
    setGoodsPriceSum,
  ) {

  return (
    goodsAdded
    .map((goodsItem, index) => {
      return <GoodsCard
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
      />
    })
    .reverse()
  );
}

export default showGoodsCards;