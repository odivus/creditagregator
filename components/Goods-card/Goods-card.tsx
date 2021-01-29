import {useState} from 'react';
import Quantity from '../Quantity/Quantity';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props) {
  console.log(props);
  const {
    category,
    brand,
    model,
    price,
    quantity,
    index,
    _id,
  } = props;

  const [cardQuantity, setCardQuantity] = useState(quantity);

  return (
    <div className={cx(styles['card-wrapper'], 'flex-centered')}>
      <i className={cx('small', 'material-icons', styles.close)}>close</i>
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
        <Quantity quantity={cardQuantity} setQuantity={setCardQuantity} />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>
          {price * cardQuantity}&nbsp;&#8381;
        </span>
      </div>
    </div>
  );
}

export default GoodsCard;
