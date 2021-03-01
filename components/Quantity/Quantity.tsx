import { useState, useEffect } from 'react';
import styles from './Quantity.module.scss';

interface Props {
  goodsQuantity: number;
  goodsQuantityReset: boolean;
  setgoodsQuantityReset: (state: boolean) => void;
  setAddGoodsQuantity: (state: number) => void;
  setGoodsCardQuantity: (state: number) => void;
}

function Quantity(props: Props) {
  const {
    goodsQuantity,
    goodsQuantityReset,
    setgoodsQuantityReset,
    setAddGoodsQuantity,
    setGoodsCardQuantity,
  } = props;

  const [quantity, setQuantity] = useState(goodsQuantity);

  useEffect(() => {
    if (goodsQuantityReset) {
      setgoodsQuantityReset(false);
      return setQuantity(1);
    }

    if (quantity !== 1) {
      setAddGoodsQuantity(quantity);
      setGoodsCardQuantity(quantity);
    }
  }, [quantity, goodsQuantityReset]);

  function increase() {
    setQuantity(quantity + 1);
  }
  
  function decrease() {
    const decreaseQuantity = quantity - 1;

    if (decreaseQuantity < 1) {
      setQuantity(1); 
    } else {
      setQuantity(decreaseQuantity);
    }
  }

  return (
    <div className={`${styles.quantity} flex-centered`}>
      <span onClick={decrease}>&ndash;</span>
      <span>{quantity}</span>
      <span onClick={increase}>&#43;</span>
    </div>
  );
}

export default Quantity;
