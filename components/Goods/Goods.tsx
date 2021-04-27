import {useState, useEffect} from 'react';
import dbUpdateUserData from '../../database/db-update-user-data';
import { useRouter } from 'next/router';

import GoodsProps from '../../Interfaces/Goods-props';
import GoodsSelect from '../Goods-select/Goods-select';
import GoodsSum from '../Goods-sum/Goods-sum';
import AddGoodsQuantity from './Add-goods-quantity';

import showGoodsCards from './show-goods-cards';
import addGoods from './add-goods';

import cx from 'classnames';
import styles from './Goods.module.scss';

function Goods(props: GoodsProps) {
  const router = useRouter();
  const { 
    selectedFullModel, 
    fromDbUserGoodsAdded, 
  } = props;

  const [goodsAdded, setGoodsAdded] = useState(fromDbUserGoodsAdded);

  const [addGoodsQuantity, setAddGoodsQuantity] = useState(1);
  const [goodsQuantityReset, setgoodsQuantityReset] = useState(false);
  const [goodsPriceSum, setGoodsPriceSum] = useState(0);

  const userId = '5fec5250f79e186ea110fb6f';

  const userGoodsAdded = {
    id: userId,
    selected_goods: goodsAdded,
  }

  const addGoodsParams = [
    userId,
    goodsAdded,
    selectedFullModel,
    addGoodsQuantity,
    setGoodsAdded,
    setgoodsQuantityReset,
    setAddGoodsQuantity,
    dbUpdateUserData 
  ];

  const showGoodsCardsParams = [
    goodsAdded, 
    userGoodsAdded, 
    setGoodsAdded,
    setGoodsPriceSum
  ];
  
  const calcCreditClassName = cx({
    'waves-effect waves-light btn btn-large-custom btn-custom_green': goodsPriceSum > 0,
    'btn btn-large-custom disabled': goodsPriceSum === 0
  });

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

  return (
    <div className='row row_content'>
      <div className='col s12 m12 l12'>
        <div className={styles['goods-content-wrap']}>
          <div className={styles['goods-select-wrap']}>
            <div className={cx(styles['goods-select-wrapper'], 'flex-centered')}>
              <GoodsSelect {...props} /> 
              <AddGoodsQuantity
                goodsQuantityReset={goodsQuantityReset} 
                setgoodsQuantityReset={setgoodsQuantityReset}
                goodsQuantity={addGoodsQuantity}
                setAddGoodsQuantity={setAddGoodsQuantity}
              />
            </div>
            <div className={cx(styles['goods-buttons'], 'flex-centered')}>
              <button
                className='waves-effect waves-light btn btn-large-custom btn-custom_blue'
                onClick={() => {
                  addGoods(addGoodsParams);
                }}
              >
                Добавить товар
              </button>
              <button 
                className={calcCreditClassName}
                onClick={() => {
                  router.push('/calculator');
                  sessionStorage.setItem('goodsPriceSum', goodsPriceSum.toString());
                }}
              >
                Рассчитать кредит
              </button>
            </div>
            <GoodsSum 
              goodsPriceSum={goodsPriceSum} 
              goodsQuantity={goodsAdded.length}
            />
          </div>
          <div className={styles['goods-cards-wrap']}>
            <div className={cx(styles['goods-cards-wrapper'], 'custom-scroll-bar')}>
              {
                showGoodsCards(showGoodsCardsParams)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goods;
