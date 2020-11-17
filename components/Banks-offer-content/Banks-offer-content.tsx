import scrollTop from '../../utilities/scroll-top';
import cx from 'classnames';
import styles from './Banks-offer-content.module.scss';

function BanksOfferContent() {
  return (
    <>
      <div className='content-wrap content-wrap_paddings'>
        <h6 className='content-wrap__header'>
          <a name='raifazen'>Райфайзен Банк Аваль</a>
        </h6>
        <div className='content-wrapper'>
          <ul
            className={cx(
              styles['card-content'],
              styles['color-shaddow-hover']
            )}
          >
            <li className={cx(styles['card-content__header'])}>Тариф</li>
            <li
              className={cx(
                styles['card-content__text'],
                styles['card-content__text_size_big']
              )}
            >
              Мега Премиум
            </li>
            <li className={styles['card-content__header']}>Срок, мес</li>
            <li className={styles['card-content__text']}>9</li>
            <li className={styles['card-content__header']}>
              Ежемесячный платеж
            </li>
            <li className={styles['card-content__text']}>
              544 860,04&nbsp;&#8381;
            </li>
            <li className={styles['card-content__header']}>Ставка</li>
            <li className={styles['card-content__text']}>51,9%</li>
            <li className={styles['card-content__header']}>
              Общая сумма выплат
            </li>
            <li className={styles['card-content__text']}>
              14 352 180,36&nbsp;&#8381;
            </li>
            <button className={cx('btn', 'btn-custom', 'waves-effect', 'waves-light', 'btn-custom_green', styles['btn-card-content'])}>
              Выбрать
            </button>
          </ul>

          <ul
            className={cx(
              styles['card-content'],
              styles['color-shaddow-hover']
            )}
          >
            <li className={cx(styles['card-content__header'])}>Тариф</li>
            <li
              className={cx(
                styles['card-content__text'],
                styles['card-content__text_size_big']
              )}
            >
              Мега Премиум
            </li>
            <li className={styles['card-content__header']}>Срок, мес</li>
            <li className={styles['card-content__text']}>9</li>
            <li className={styles['card-content__header']}>
              Ежемесячный платеж
            </li>
            <li className={styles['card-content__text']}>
              544 860,04&nbsp;&#8381;
            </li>
            <li className={styles['card-content__header']}>Ставка</li>
            <li className={styles['card-content__text']}>51,9%</li>
            <li className={styles['card-content__header']}>
              Общая сумма выплат
            </li>
            <li className={styles['card-content__text']}>
              14 352 180,36&nbsp;&#8381;
            </li>
            <button className={cx('btn', 'btn-custom', 'waves-effect', 'waves-light', 'btn-custom_green', styles['btn-card-content'])}>
              Выбрать
            </button>
          </ul>

          <ul
            className={cx(
              styles['card-content'],
              styles['color-shaddow-hover']
            )}
          >
            <li className={cx(styles['card-content__header'])}>Тариф</li>
            <li
              className={cx(
                styles['card-content__text'],
                styles['card-content__text_size_big']
              )}
            >
              Мега Премиум
            </li>
            <li className={styles['card-content__header']}>Срок, мес</li>
            <li className={styles['card-content__text']}>9</li>
            <li className={styles['card-content__header']}>
              Ежемесячный платеж
            </li>
            <li className={styles['card-content__text']}>
              544 860,04&nbsp;&#8381;
            </li>
            <li className={styles['card-content__header']}>Ставка</li>
            <li className={styles['card-content__text']}>51,9%</li>
            <li className={styles['card-content__header']}>
              Общая сумма выплат
            </li>
            <li className={styles['card-content__text']}>
              14 352 180,36&nbsp;&#8381;
            </li>
            <button className={cx('btn', 'btn-custom', 'waves-effect', 'waves-light', 'btn-custom_green', styles['btn-card-content'])}>
              Выбрать
            </button>
          </ul>
        </div>
        <a href='#' className='scroll-up' onClick={scrollTop}>
          <i className='small material-icons'>arrow_drop_up</i>
        </a>
      </div>
    </>
  );
}

export default BanksOfferContent;
