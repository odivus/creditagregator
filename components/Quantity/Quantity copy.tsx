import { useState, useEffect } from 'react';
import styles from './Quantity.module.scss';

function Quantity(props) {
  const {
    goodsItemQuantity,
    setGoodsItemQuantity,
    goodsAdded,
    globalQuantity,
    setGlobalQuantity,
    // quantityReset,
    // setQuantityReset,
    setGoodsAdded,
    goodsItemId,
  } = props;

  const qurrentGoodsItem = goodsAdded.find(item => item._id === goodsItemId);
  console.log(qurrentGoodsItem);
  console.log('Quantity - global Quantity ' + globalQuantity);

  // const qurrentQuantity = qurrentGoodsItem ? qurrentGoodsItem.quantity : goodsItemQuantity;

  // const [quantity, setQuantity] = useState(qurrentQuantity || 1);
  const [quantity, setQuantity] = useState(globalQuantity || qurrentGoodsItem.quantity);
  console.log('Quantity - local Quantity ' + quantity);
 
  // useEffect(() => {
  //  if (globalQuantity && setGlobalQuantity) setGlobalQuantity(1);
  // });

  // useEffect(() => {
  //   if (quantityReset) {
  //     setQuantity(1);
  //     setQuantityReset(false);
  //     setGoodsItemQuantity(1);
  //   }
  // });

  function increase() {
    const increaseQuantity = quantity + 1;
    
    if (setGoodsAdded) {
      const filteredGoodsAdded = goodsAdded.filter(item => item._id !==  qurrentGoodsItem._id);
      setGoodsAdded([
      ...filteredGoodsAdded,
      {
        ...qurrentGoodsItem,
        quantity: increaseQuantity,
      },
    ]);

    return setQuantity(increaseQuantity);
    // setQuantity(increaseQuantity);
    // return setGoodsItemQuantity(1);
  }

    if (globalQuantity) setGlobalQuantity(increaseQuantity);
    setQuantity(increaseQuantity);
    // setGoodsItemQuantity(increaseQuantity);
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
