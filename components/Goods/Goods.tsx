import {useState, useEffect} from 'react';
import GoodsSelect from '../Goods-select/Goods-select';
import GoodsCard from '../Goods-card/Goods-card';
import Quantity from '../Quantity/Quantity';

import cx from 'classnames';
import styles from './Goods.module.scss';

function Goods(props) {
  console.log(props);

  const [goodsAdded, setGoodsAdded] = useState([]);
  const [quantityReset, setQuantityReset] = useState(false);
  const [goodsItemQuantity, setGoodsItemQuantity] = useState(1);

  console.log(goodsAdded);
  console.log('goodsItemQuantity: ' + goodsItemQuantity);

  function showGoodsCards() {
    return goodsAdded
      .map((goodsItem, index) => (
        <GoodsCard
          key={goodsItem._id}
          {...{
            index: ++index,
            ...goodsItem,
            removeItem: removeGoods,
            goodsAdded,
            goodsItemQuantity,
            setGoodsAdded,
            setGoodsItemQuantity,
          }}
        />
      ))
      .reverse();
  }

  function addGoods() {
    const { selectedFullModel } = props;
    const addedItem = [
      ...goodsAdded,
      {
        ...selectedFullModel,
        quantity: goodsItemQuantity,
      },
    ];

    const findDuplicate = goodsAdded.find(
      (item) => item._id === selectedFullModel._id
    );

    if (findDuplicate) return setQuantityReset(true);

    if (goodsAdded.length === 0) {
      setGoodsAdded([{
        ...selectedFullModel,
        quantity: goodsItemQuantity,
      }]);

      return setQuantityReset(true);
    }

    setGoodsAdded(addedItem);
    setQuantityReset(true);
  }

  function removeGoods(id: string) {
    const filteredItems = goodsAdded.filter(item => item._id !== id);
    setGoodsAdded(filteredItems);
  }

  return (
    <div className='row row_content'>
      <div className='col s12 m5 l5'>
        <div className={cx(styles['goods-select-wrapper'], 'flex-centered')}>
          <GoodsSelect {...props} />
          <Quantity
            setGoodsItemQuantity={setGoodsItemQuantity}
            goodsAdded={goodsAdded}
            quantityReset={quantityReset}
            setQuantityReset={setQuantityReset}
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
        <div className={cx(styles['goods-sum'], 'flex-centered')}>
          <div className={styles['goods-sum__text']}>
            Выбранных товаров:&nbsp;{}
            {/* <a className='text-link' href='#'>
              <span className='text-link_dashed'>2&nbsp;товара</span>
            </a>
            на&nbsp;сумму */}
          </div>
          <div className={styles['goods-sum__text']}> На&nbsp;сумму:</div>
          <div className={styles['goods-sum__price']}>
            9 448 440&nbsp;&#8381;
          </div>
        </div>
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
