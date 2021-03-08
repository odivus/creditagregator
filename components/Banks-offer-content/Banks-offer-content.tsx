import InfoCard from '../Info-card/Info-card';
import scrollTop from '../../utilities/scroll-top';
import cx from 'classnames';
import styles from './Banks-offer-content.module.scss';

function BanksOfferContent({ banks }) {
  console.log(banks);

  const data = [
    {
      'card-content__header': 'Срок, мес',
      'card-content__text': 9,
    },
    {
      'card-content__header': 'Ставка',
      'card-content__text': 51.9,
    },
    {
      'card-content__header': 'Комиссия',
      'card-content__text': 1.9,
    },
    {
      'card-content__header': 'Общая сумма выплат &nbsp;&#8381;',
      'card-content__text': 14352180.36,
    },
  ];

  return (
    <>
      <div className='content-wrap content-wrap_paddings'>
        <div className='content-wrapper'>
          <ul
            className={cx(
              styles['card-content'],
              styles['color-shaddow-hover']
            )}
          >
            <li>
              <h6>Райфайзен Банк Аваль</h6>
            </li>
            {
              <InfoCard data={data} />
            }
            {/* <li className={styles['card-content__header']}>Срок, мес</li>
            <li className={styles['card-content__text']}>9</li>
            <li className={styles['card-content__header']}>Ставка</li>
            <li className={styles['card-content__text']}>51,9%</li>
            <li className={styles['card-content__header']}>Комиссия</li>
            <li className={styles['card-content__text']}>1,9%</li>
            <li className={styles['card-content__header']}>
              Общая сумма выплат
            </li>
            <li className={styles['card-content__text']}>
              14 352 180,36&nbsp;&#8381;
            </li> */}
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
