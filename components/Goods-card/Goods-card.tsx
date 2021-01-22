import GoodsSelect from '../Goods-select/Goods-select';
import Quantity from '../Quantity/Quantity';

import cx from 'classnames';
import styles from './Goods-card.module.scss';

function GoodsCard(props) {
  return (
    <div className={cx(styles['card-wrapper'], 'flex-centered')}>
      <i className={cx('small', 'material-icons', styles.close)}>close</i>
      <div className={cx(styles['goods-card'], 'flex-centered')}>
        <div className={cx(styles['goods-card__item'], 'flex-centered')}>
          <div className={styles['goods-card__number']}>99</div>
          <GoodsSelect {...props} />
        </div>
        <Quantity />
      </div>
      <div className={styles['goods-card__cost']}>
        Цена&nbsp;
        <span className={styles['cost-number']}>120000&nbsp;&#8381;</span>
      </div>
    </div>
  );
}

export default GoodsCard;
