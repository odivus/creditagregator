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
    goodsAdded,
    goodsItemQuantity,
    setGoodsItemQuantity,
    quantityReset,
    index,
    _id,
  } = props;

  // console.log(_id);

  // const [goodsQuantity, setGoodsQuantity] = useState(quantity);
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
          goodsItemQuantity={goodsItemQuantity}
          setGoodsItemQuantity={setGoodsItemQuantity}
          goodsAdded={goodsAdded}
          quantityReset={quantityReset}
          goodsItemId={_id}
        />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>
          {price * 1}&nbsp;&#8381;
        </span>
      </div>
    </div>
  );
}

export default GoodsCard;
