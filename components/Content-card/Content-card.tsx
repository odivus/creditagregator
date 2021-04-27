import CardItems from '../Card-items/Card-items';
import convertBanksData from '../../utilities/convert-banks-data';

import cx from 'classnames';
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

interface Props {
  data: Array<Object>;
  parentMonthlyPayment: number;
}

function ContentCard(props: Props) {
  const { data, parentMonthlyPayment } = props;
  interface DataItem {
    commission: number;
    name: string;
    rate: number;
    term: number;
    _id: string;
  }
  
  return (
    data.map((item: DataItem) => {
      const totalSum = Math.round( 
        (parentMonthlyPayment * item.term) 
      + (parentMonthlyPayment * item.rate / 100) 
      + (parentMonthlyPayment * item.commission / 100)
      );

      return <ul 
        key={item._id}
        className={cx(
          styles['card-content'],
          styles['color-shaddow-hover']
        )}
      >
        <li>
          <h6>{item.name}</h6>
        </li>
        {
          <CardItems data={convertBanksData(item)} />
        }
        <li className={cx(styles['card-content__header'])}>
          Общая сумма выплат,&nbsp;&#8381;
        </li>
        <li className={cx(styles['card-content__text'])}>
          {totalSum}
        </li>
        
        <button className={cx('btn', 'btn-custom', 'waves-effect', 'waves-light', 'btn-custom_green', styles['btn-card-content'])}>
          Выбрать
        </button>
      </ul>
    })
  );
}

export default ContentCard;
