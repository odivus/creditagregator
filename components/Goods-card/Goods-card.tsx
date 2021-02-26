import ChangeGoodsAddedQuantity from '../Goods/Change-goods-added-quantity';
import dbUpdateUserData from '../../database/db-update-user-data';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props) {
  const {
    goodsAdded,
    userGoodsAdded,
    setGoodsAdded,
    setGoodsPriceSum,
    goodsAddedIndex,
    category,
    quantity,
    brand,
    model,
    price,
    index,
    _id,
  } = props;

  const filteredCurrentItem = goodsAdded.filter(item => item._id !== _id);

  function changeGoodsItemQuantity(quantity: number) {
    const changedGoodsAdded = [...goodsAdded];
    const itemChangedQuantity = goodsAdded[index] = {
      ...goodsAdded[index],
      quantity
    }

    changedGoodsAdded[index] = itemChangedQuantity;
    setGoodsAdded(changedGoodsAdded);
    dbUpdateUserData(userGoodsAdded);
  }

  function removeGoodsItem() {
    const { id } = userGoodsAdded;

    setGoodsAdded(filteredCurrentItem);
    setGoodsPriceSum(0);
    
    dbUpdateUserData({
      id,
      selected_goods: filteredCurrentItem,
    });
  }

  return (
    <div className={cx(styles['card-wrapper'], 'flex-centered')}>
      <i
        onClick={() => removeGoodsItem()}
        className={cx('small', 'material-icons', styles.close)}
      >
        delete
      </i>
      <div className={cx(styles['goods-card'], 'flex-centered')}>
        <div className={cx(styles['goods-card__item'], 'flex-centered')}>
          <div className={styles['goods-card__number']}>{goodsAddedIndex}</div>
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
          quantity={quantity} 
          changeGoodsItemQuantity={changeGoodsItemQuantity}
        />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>
          {price * quantity}&nbsp;&#8381;
        </span>
      </div>
    </div>
  );
}

export default GoodsCard;
