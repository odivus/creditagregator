import styles from './Goods-sum.module.scss';

function TotalGoodsSum({ totalSum }) {
  return totalSum < 0 
    ? null
    : (
    <div className={`${styles['goods-sum']} ${styles['total-goods-sum']}`}>
      <div className={styles['goods-sum__text']}>
        Итого:
      </div>
      <div className={styles['goods-sum__price']}>
        {totalSum}&nbsp;&#8381;
      </div>
    </div>
  );
}

export default TotalGoodsSum;
