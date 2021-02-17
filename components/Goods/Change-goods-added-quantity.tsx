import {useState, useEffect} from 'react';
import Quantity from '../Ui/Quantity/Quantity';

function ChangeGoodsAddedQuantity(props) {
  const {
    goodsCurrentItem,
    goodsAddedItemQuantity, 
    setCurrentCardItemQuantity,
    // currentCardItemQuantity,
    // totalGoodsAdded,
    // setTotalGoodsAdded,
    // goodsAddedId,
  } = props;

  const [quantity, setQuantity] = useState(goodsAddedItemQuantity);
  // prop goodsCurrentItem ЗАЦИКЛИВАЕТ
  useEffect(() => {
    setCurrentCardItemQuantity({
      ...goodsCurrentItem,
      quantity,
    });
  }, [quantity, goodsAddedItemQuantity]);

  return (
    <Quantity
      setQuantity={setQuantity}
      quantity={quantity}
    />
  );
}

export default ChangeGoodsAddedQuantity;
