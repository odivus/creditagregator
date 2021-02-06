import { useState, useEffect } from 'react';
import styles from './Quantity.module.scss';

function Quantity(props) {
  const {
    goodsItemQuantity,
    setGoodsItemQuantity,
    goodsAdded,
    quantityReset,
    setQuantityReset,
    goodsItemId,
  } = props;

  // console.log('goodsItemQuantity: ' + goodsItemQuantity);
  // console.log(quantityReset);
  // console.log(goodsItemId);

  const qurrentGoodsItem = goodsAdded.find(item => item._id === goodsItemId);
  console.log(qurrentGoodsItem);

  const [quantity, setQuantity] = useState(
    qurrentGoodsItem ? qurrentGoodsItem.quantity : 1
  );

  useEffect(() => {
    if (quantityReset) {
      setQuantity(1);
      setQuantityReset(false);
    }

    // if (goodsItemQuantity) setQuantity(goodsItemQuantity);
  });

  function increase() {
    const increaseQuantity = quantity + 1;

    setQuantity(increaseQuantity);
    setGoodsItemQuantity(increaseQuantity);
  }
  
  function decrease() {
    const decreaseQuantity = quantity - 1;

    if (decreaseQuantity < 1) {
      setQuantity(1);
    } else {
      setQuantity(decreaseQuantity);
      setGoodsItemQuantity(decreaseQuantity);
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
