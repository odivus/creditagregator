import {useState, useEffect} from 'react';
import GoodsCardProps from '../../Interfaces/Goods-card-props';
import ChangeGoodsAddedQuantity from '../Goods/Change-goods-added-quantity';
import dbUpdateUserData from '../../database/db-update-user-data';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props: GoodsCardProps) {
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

  const[goodsItemRemoved, setGoodsItemRemoved] = useState(false);

  useEffect(() => {
    let timer: number;
    
    if (goodsItemRemoved) { 
      timer = window.setTimeout(() => {
        removeGoodsItem();
        setGoodsItemRemoved(false);
      }, 340);
    }

    return () => clearTimeout(timer);

  }, [goodsItemRemoved]);

  const removeClassName = cx({
    'card-wrapper_remove_animation': goodsItemRemoved,
  });

  const filteredCurrentItem = goodsAdded.filter((item: {_id: string}) => {
    return item._id !== _id;
  });

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

  function handleClick() {
    setGoodsItemRemoved(true);
  }

  return (
    <div className={cx(styles['card-wrapper'], styles[removeClassName], 'flex-centered')}>
      <div className={styles['goods-card-header']}>
        <div className={styles['goods-card-number']}>{goodsAddedIndex}</div>
        <i
          onClick={handleClick}
          className={cx('small', 'material-icons', styles.remove)}
        >
          delete
        </i>
      </div>
      <div className={cx(styles['goods-card'], 'flex-centered')}>
        <div className={cx(styles['goods-card-item'], 'flex-centered')}>
          <div className={cx(styles['goods-card-item__category'])}>
            {category}
          </div>
          <div className={cx(styles['goods-card-item__brand'])}>
            {brand} {model}
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
