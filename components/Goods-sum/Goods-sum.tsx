import cx from 'classnames';
import styles from './Goods-sum.module.scss';

function GoodsSum({ goodsPriceSum, goodsQuantity }) {
  const goodsSumClassName = cx({
    'goods-sum': goodsQuantity > 0,
    'goods-sum_visibility_hidden': goodsQuantity === 0,
  });

  return (
    <div className={styles[goodsSumClassName]}>
      <div className={styles['goods-sum__text']}>
        Выбранно товаров:&nbsp;{goodsQuantity}
      </div>
      <div className={styles['goods-sum__text']}> На&nbsp;сумму:</div>
      <div className={styles['goods-sum__price']}>
        {goodsPriceSum}&nbsp;&#8381;
      </div>
    </div>
  );
}

export default GoodsSum;
