import cx from 'classnames';
import styles from './Goods-sum.module.scss';

function GoodsSum({ totalGoodsAdded, sum }) {
  console.log(totalGoodsAdded);
  // function getSum(totalGoodsAdded) {
  //   const length = totalGoodsAdded.length;

  //   if (length === 0) return 0;

  //   if (length === 1) {
  //     return totalGoodsAdded[0].price * totalGoodsAdded[0].quantity;
  //   }

  //   return totalGoodsAdded.reduce((acc, item) => {
  //     return acc.price * acc.quantity + item.price * item.quantity;
  //   });
  // }

  // const sum = getSum(totalGoodsAdded);
  // console.log(sum);

  return (
    <div className={cx(styles['goods-sum'], 'flex-centered')}>
      <div className={styles['goods-sum__text']}>
        Выбранно товаров:&nbsp;{totalGoodsAdded.length}
        {/* <a className='text-link' href='#'>
          <span className='text-link_dashed'>2&nbsp;товара</span>
        </a>
        на&nbsp;сумму */}
      </div>
      <div className={styles['goods-sum__text']}> На&nbsp;сумму:</div>
      <div className={styles['goods-sum__price']}>
        {sum}&nbsp;&#8381;
      </div>
    </div>
  );
}

export default GoodsSum;
