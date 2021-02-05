import { useState, useEffect } from 'react';
import styles from './Quantity.module.scss';

function Quantity(props) {
  const {
    quantity,
    totalGoods,
    setTotalGoods,
    setQuantity,
    setGoodsAdded,
    goodsAdded,
    selectedFullModel,
    id,
  } = props;

  console.log(quantity);

  // const [totalQuantity, setTotalQuantity] = useState({});

  const goodsItem = goodsAdded.find((item) => item._id === id);
  const goodsItemModify = totalGoods.find(item => item.id === id);
  const { _id, price } = selectedFullModel;
  const totalGoodsModify = [];


  // console.log(totalQuantity);

  function increase() {
    const increaseQuantity = quantity + 1;


    setQuantity(increaseQuantity);
    setGoodsAdded([...goodsAdded]);

    
    if (goodsAdded.length < 1) {
      // console.log(goodsAdded.length);
      // return setTotalGoods([
      //   { id: selectedFullModel._id, 
      //     price: selectedFullModel.price,
      //     quantity: increaseQuantity, 
      //   },
      // ]);
    };

    if (goodsAdded.length === 1) {
      // В массиве предыдущий добавленный элемент, а текущего еще нет
      // console.log(totalGoods); 
      console.log(goodsAdded); 
      console.log(goodsItemModify); // undefined
      // console.log(id);

      if (!goodsItemModify) {
        return setTotalGoods([...totalGoods]);
      }

      setTotalGoods([
        { ...goodsItemModify, quantity: increaseQuantity },
      ]);
    }

    if (goodsAdded.length > 1) {
      console.log(totalGoods);
      totalGoods.forEach(item => {
        totalGoodsModify.push({
          id: item.id,
          price: item.price,
          quantity: item.quantity,
        })
      });

      console.log(totalGoodsModify);
      
      const totalGoodsModifyItemIndex = totalGoodsModify
      .findIndex(item => item.id === id);
      
      // console.log(totalGoodsModifyItemIndex);

      if (totalGoodsModifyItemIndex !== -1) {
        totalGoodsModify[totalGoodsModifyItemIndex].quantity = increaseQuantity;
      }


      // console.log(totalGoodsModify);
      
      setTotalGoods(totalGoodsModify);

    }
    
    console.log('Total Goods: ');
    console.log(totalGoods);

  }

  function decrease() {
    const doCheck = checkSetQuantity(quantity);
    const decreaseQuantity = quantity - 1;

    doCheck ? setQuantity(decreaseQuantity) : setQuantity(1);
    if (goodsItem) {
      
      setGoodsAdded(goodsAdded);
    }
  }

  function checkSetQuantity(quantity): boolean {
    return quantity <= 1 ? false : true;
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
