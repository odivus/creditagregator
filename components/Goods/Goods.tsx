import {useState, useEffect} from 'react';
import GoodsSelect from '../Goods-select/Goods-select';
import GoodsSum from '../Goods-sum/Goods-sum';
import GoodsCard from '../Goods-card/Goods-card';
import AddGoodsQuantity from './Add-goods-quantity';

import cx from 'classnames';
import styles from './Goods.module.scss';

function Goods(props) {
  const { selectedFullModel } = props;

  const [goodsAdded, setGoodsAdded] = useState([]);
  const [addGoodsQuantity, setAddGoodsQuantity] = useState(1);
  const [goodsQuantityReset, setgoodsQuantityReset] = useState(false);
  const [goodsPriceSum, setGoodsPriceSum] = useState(0);
  
  const calcCreditClassName = cx({
    'waves-effect waves-light btn btn-large-custom btn-custom_green': goodsPriceSum > 0,
    'btn btn-large-custom disabled': goodsPriceSum === 0
  });

  console.log(goodsAdded);

  useEffect(() => {
    const length = goodsAdded.length;

    if (length === 0) return;

    if (length === 1) {
      return setGoodsPriceSum(goodsAdded[0].price * goodsAdded[0].quantity);
    }

    const sum = goodsAdded.reduce((acc, currentValue) => {
      const { price, quantity } = currentValue;
      return acc + (price * quantity);
    }, 0);
      
    setGoodsPriceSum(sum);
  }, [goodsAdded]);

  function addGoods() {
    if (goodsAdded.length === 0) {
      setGoodsAdded([{
        ...selectedFullModel,
        quantity: addGoodsQuantity,
      }]);

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
            goodsAddedIndex: index + 1,
            ...goodsItem,
            index,
            goodsAdded,
            setGoodsAdded,
            setGoodsPriceSum,
          }}
        />
      ))
      .reverse();
  }

  return (
    <div className='row row_content'>
      <div className='col s12 m5 l5'>
        <div className={cx(styles['goods-select-wrapper'], 'flex-centered')}>
          <GoodsSelect {...props} /> 
          <AddGoodsQuantity
            goodsQuantityReset={goodsQuantityReset} 
            setgoodsQuantityReset={setgoodsQuantityReset}
            goodsQuantity={addGoodsQuantity}
            setAddGoodsQuantity={setAddGoodsQuantity}
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
          <button className={calcCreditClassName}>
            Рассчитать кредит
          </button>
        </div>
        <GoodsSum 
          goodsPriceSum={goodsPriceSum} 
          goodsQuantity={goodsAdded.length}
        />
      </div>
      <div className={cx('col', 's12', 'm7', 'l7', styles.goods)}>
        <div className={cx(styles['goods-wrapper'], 'custom-scroll-bar')}>
          {showGoodsCards()}
        </div>
      </div>
    </div>
  );
}

export default Goods;
