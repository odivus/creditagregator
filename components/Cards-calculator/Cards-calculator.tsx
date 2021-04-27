import { useRouter } from 'next/router';
import convertBanksData from '../../utilities/convert-banks-data';

import CardItems from '../Card-items/Card-items';

import cx from 'classnames';
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

interface Props {
  filteredBanks: Array<Object>;
  parentMonthlyPayment: number;
}

function CardsCalculator(props: Props) {
  const { filteredBanks, parentMonthlyPayment } = props;
  interface DataItem {
    commission: number;
    name: string;
    rate: number;
    term: number;
    _id: string;
  }

  const router = useRouter();
  
  return (
    filteredBanks.map((item: DataItem, key: number) => {
      const totalSum = Math.round( 
        (parentMonthlyPayment * item.term) 
      + (parentMonthlyPayment * item.rate / 100) 
      + (parentMonthlyPayment * item.commission / 100)
      );

      const selectedBank = {
        name: item.name,
        term: item.term,
        rate: item.rate,
        commission: item.commission,
      }

      return <ul 
        key={key}
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
        
        <button 
          className={cx('btn', 'btn-custom', 'waves-effect', 'waves-light', 'btn-custom_green', styles['btn-card-content'])}
          onClick={() => {
            router.push('/request-send');
            sessionStorage.setItem(
              'selectedBank', JSON.stringify(selectedBank)
            );
          }}
        >
          Выбрать
        </button>
      </ul>
    })
  );
}

export default CardsCalculator;