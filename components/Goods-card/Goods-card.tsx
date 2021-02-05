import {useState, useEffect} from 'react';
import Quantity from '../Quantity/Quantity';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props) {
  // console.log(props);
  const {
    removeItem,
    category,
    brand,
    model,
    price,
    quantity,
    goodsAdded,
    setGoodsAdded,
    setTotalGoods,
    totalGoods,
    selectedFullModel,
    // totalQuantity,
    // setTotalQuantity,
    index,
    _id,
  } = props;

  const [goodsQuantity, setGoodsQuantity] = useState(quantity);
  // console.log('Goods-card, cards: ' + goodsQuantity)

  return (
    <div className={cx(styles['card-wrapper'], 'flex-centered')}>
      <i
        onClick={() => removeItem(_id)}
        className={cx('small', 'material-icons', styles.close)}
      >
        delete
      </i>
      <div className={cx(styles['goods-card'], 'flex-centered')}>
        <div className={cx(styles['goods-card__item'], 'flex-centered')}>
          <div className={styles['goods-card__number']}>{index}</div>
          <div className={styles['goods-card__content']}>
            <div>
              Категория: <p>{category}</p>
            </div>
            <div>
              Бренд: <p>{brand}</p>
            </div>
            <div>
              Модель: <p>{model}</p>
            </div>
          </div>
        </div>
        <Quantity
          quantity={goodsQuantity}
          setQuantity={setGoodsQuantity}
          setGoodsAdded={setGoodsAdded}
          setTotalGoods={setTotalGoods}
          totalGoods={totalGoods}
          selectedFullModel={selectedFullModel}
          // totalQuantity={totalQuantity}
          // setTotalQuantity={setTotalQuantity}
          goodsAdded={goodsAdded}
          id={_id}
        />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>
          {price * goodsQuantity}&nbsp;&#8381;
        </span>
      </div>
    </div>
  );
}

export default GoodsCard;
