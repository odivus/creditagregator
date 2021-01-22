import GoodsSelect from '../Goods-select/Goods-select';
import GoodsCard from '../Goods-card/Goods-card';
import Quantity from '../Quantity/Quantity';

import cx from 'classnames';
import styles from './Goods.module.scss';

function Goods(props) {
  return (
    <div className='row row_content'>
      <div className='col s12 m5 l5'>
        <div className={cx(styles['goods-select-wrapper'], 'flex-centered')}>
          <GoodsSelect {...props} />
          <Quantity />
        </div>
        <div className={cx(styles['goods-buttons'], 'flex-centered')}>
          <button className='waves-effect waves-light btn btn-large-custom btn-custom_blue'>
            Добавить товар
          </button>
          <button className='waves-effect waves-light btn btn-large-custom btn-custom_green'>
            Рассчитать кредит
          </button>
        </div>
        <div className={cx(styles['goods-sum'], 'flex-centered')}>
          <div className={styles['goods-sum__text']}>
            Выбрано
            <a className='text-link' href='#'>
              <span className='text-link_dashed'>2&nbsp;товара</span>
            </a>
            на&nbsp;сумму
          </div>
          <div className={styles['goods-sum__price']}>
            9 448 440&nbsp;&#8381;
          </div>
        </div>
      </div>
      <div className={cx('col', 's12', 'm7', 'l7', styles.goods)}>
        <div className={cx(styles['goods-wrapper'], 'custom-scroll-bar')}>
          <GoodsCard {...props} />
          {/* <GoodsCard {...props} />
          <GoodsCard {...props} />
          <GoodsCard {...props} />
          <GoodsCard {...props} /> */}
        </div>
      </div>
    </div>
  );
}

export default Goods;
