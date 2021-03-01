import {useState, useEffect} from 'react';
import Quantity from '../Ui/Quantity/Quantity';

interface Props {
  goodsQuantityReset: boolean;
  setgoodsQuantityReset: (state: boolean) => void;
  goodsQuantity: number; 
  setAddGoodsQuantity: (state: number) => void;
}

function AddGoodsQuantity(props: Props) {
  const { 
      goodsQuantityReset,
      setgoodsQuantityReset,
      goodsQuantity, 
      setAddGoodsQuantity,
  } = props;

  const [quantity, setQuantity] = useState(goodsQuantity);

  useEffect(() => {
    if (goodsQuantityReset) {
      setgoodsQuantityReset(false);
      return setQuantity(1);
    }

    if (quantity !== 1) {
      setAddGoodsQuantity(quantity);
    }
  }, [quantity, goodsQuantityReset, goodsQuantity]);

  return (
    <Quantity
      setQuantity={setQuantity}
      quantity={quantity}
    />
  );
}

export default AddGoodsQuantity;
