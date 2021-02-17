import { useState, useEffect } from 'react';
import styles from './Quantity.module.scss';

function Quantity(props) {
  const { 
    goodsQuantity, 
    setAddGoodsQuantity,
    setGoodsCardQuantity,
  } = props;

  const [quantity, setQuantity] = useState(goodsQuantity);
  const [resetQuantity, setResetQuantity] = useState(false);
  console.log(goodsQuantity);
  console.log(resetQuantity);

  useEffect(() => {
    if (setAddGoodsQuantity && setGoodsCardQuantity) {
      setAddGoodsQuantity(quantity);
      setGoodsCardQuantity(quantity);

      if (goodsQuantity === 1) setResetQuantity(true);
    }
    
    if (!setAddGoodsQuantity) {
      setGoodsCardQuantity(quantity);
    }
  }, [quantity]);

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
