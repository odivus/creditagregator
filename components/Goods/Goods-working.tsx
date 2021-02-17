import React, {useState, useEffect} from 'react';
import GoodsCard from '../Goods-card/Goods-card';
import GoodsSelect from '../Goods-select/Goods-select';
import GoodsSum from '../Goods-sum/Goods-sum';
import AddGoodsQuantity from './Add-goods-quantity';

import cx from 'classnames';
import styles from './Goods.module.scss';

function GoodsWorking(props) {
  const { 
    goodsAdded, 
    setGoodsAdded,
    selectedFullModel, 
  } = props;

  const [addGoodsQuantity, setAddGoodsQuantity] = useState(1);
  const [goodsQuantityReset, setgoodsQuantityReset] = useState(false);
  const [currentCardItemQuantity, setCurrentCardItemQuantity] = useState(null);
  
  const [totalGoodsAdded, setTotalGoodsAdded] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (currentCardItemQuantity) {
      const goodsAddedFiltered = totalGoodsAdded.filter(item => {
        item._id !== currentCardItemQuantity._id;
      });
      
      setTotalGoodsAdded([
        ...goodsAddedFiltered,
        currentCardItemQuantity
      ]);
    }
  },[goodsAdded, currentCardItemQuantity]);

  useEffect(() => {
    const length = totalGoodsAdded.length;

    if (length === 0) return;

    if (length === 1) {
      return setSum(totalGoodsAdded[0].price * totalGoodsAdded[0].quantity);
    }

    setSum(totalGoodsAdded.reduce((acc, item) => {
      return acc.price * acc.quantity + item.price * item.quantity;
    }));
  });

  function addGoods() {
    if (goodsAdded.length === 0) {
      setGoodsAdded([{
        ...selectedFullModel,
        quantity: addGoodsQuantity,
      }]);

      setTotalGoodsAdded([
        {
          ...selectedFullModel,
          quantity: addGoodsQuantity,
        }
      ]);

      setgoodsQuantityReset(true);
      return setAddGoodsQuantity(1);
    }

    if (goodsAdded.length > 0) {
      const findDuplicate = goodsAdded.find(
        (item) => item._id === selectedFullModel._id
      );

      if (findDuplicate) {
        setgoodsQuantityReset(true);
        return setAddGoodsQuantity(1);
      }
    
      setGoodsAdded([
        ...goodsAdded,
        {
          ...selectedFullModel,
          quantity: addGoodsQuantity,
        },
      ]);

      setTotalGoodsAdded([
      ...totalGoodsAdded,
      {
        ...selectedFullModel,
        quantity: addGoodsQuantity,
      }
    ]);

      setAddGoodsQuantity(1);
      setgoodsQuantityReset(true);
    }
  }

  function showGoodsCards() {
    return goodsAdded
      .map((goodsItem, index) => (
        <GoodsCard
          key={goodsItem._id}
          {...{
            index: index + 1,
            ...goodsItem,
            removeItem: removeGoods,
            goodsAddedItemQuantity: goodsItem.quantity,
            goodsAddedIndex: index,
            currentCardItemQuantity,
            setCurrentCardItemQuantity,
            totalGoodsAdded,
          }}
        />
      ))
      .reverse();
  }

  function removeGoods(id: string) {
    const filteredItems = goodsAdded.filter(item => item._id !== id);
    setGoodsAdded(filteredItems);
  }

  return (
    <>
      <div className='col s12 m5 l5'>
        <div className={cx(styles['goods-select-wrapper'], 'flex-centered')}>
          <GoodsSelect {...props} /> 
          <AddGoodsQuantity
            goodsQuantityReset={goodsQuantityReset} 
            setgoodsQuantityReset={setgoodsQuantityReset}
            goodsQuantity={addGoodsQuantity}
            setAddGoodsQuantity={setAddGoodsQuantity}
            totalGoodsAdded={totalGoodsAdded}
            setTotalGoodsAdded={setTotalGoodsAdded}
            goodsAddedId={selectedFullModel._id}
          />
        </div>
        <div className={cx(styles['goods-buttons'], 'flex-centered')}>
          <button
            className='waves-effect waves-light btn btn-large-custom btn-custom_blue'
            onClick={() => {
              addGoods();
            }}
          >
            Добавить товар
          </button>
          <button className='waves-effect waves-light btn btn-large-custom btn-custom_green'>
            Рассчитать кредит
          </button>
        </div>
        <GoodsSum 
          totalGoodsAdded={totalGoodsAdded}
          sum={sum} 
        />
      </div>

      <div className={cx('col', 's12', 'm7', 'l7', styles.goods)}>
        <div className={cx(styles['goods-wrapper'], 'custom-scroll-bar')}>
          {showGoodsCards()}
        </div>
      </div>
   </>   
  );
}

export default GoodsWorking;
