import ChangeGoodsAddedQuantity from '../Goods/Change-goods-added-quantity';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props) {
  const {
    currentCardItemQuantity,
    setCurrentCardItemQuantity,
    goodsAddedItemQuantity,
    totalGoodsAdded,
    removeItem,
    category,
    quantity,
    brand,
    model,
    price,
    index,
    _id,
  } = props;

  // console.log(_id);
  console.log(currentCardItemQuantity);
  
  // const totalGoodsItemQuantity = totalGoodsAdded.find(item => {
  //   return item._id === _id.toString();
  // });

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
        <ChangeGoodsAddedQuantity
          goodsCurrentItem={{category, brand, model, price, quantity, _id}}
          goodsAddedItemQuantity={goodsAddedItemQuantity}
          setCurrentCardItemQuantity={setCurrentCardItemQuantity}
        />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>
          {price * (currentCardItemQuantity ? currentCardItemQuantity.quantity : goodsAddedItemQuantity)}&nbsp;&#8381;
        </span>
      </div>
    </div>
  );
}

export default GoodsCard;
