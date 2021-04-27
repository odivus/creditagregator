import UserRequests from '../../Interfaces/User-Requests';
import cx from 'classnames';
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

interface Props {
  requests: Array<Object>;
}

function CardsRequests(props: Props) {
  const { requests } = props;
  
  return (
    requests.map((item: UserRequests, index: number) => {
      const {
        selectedBank,
        requestStatus,
        rate,
        commission,
        monthlyPayment,
        monthQuantity,
        totalSum,
      } = item;
      
      const cardContentClassName = cx({
        [styles['card-content']]: true,
        [styles['card-content_ok']]: requestStatus,
        [styles['card-content_reject']]: !requestStatus,
      });

      const cardContentVerdictClassName = cx({
        [styles['card-content-verdict']]: true,
        [styles['card-content-verdict_ok']]: requestStatus,
        [styles['card-content-verdict_reject']]: !requestStatus,
      });

      return (
        <ul 
          key={index}
          className={cardContentClassName}
        >
          <li><h6>{selectedBank}</h6></li>
          <li className={cardContentVerdictClassName}>
            { requestStatus ? 'ОДОБРЕНО' : 'ОТКЛОНЕНО' }
          </li>
          <li className={styles["card-content__header"]}>
            Ежемесячный платеж,&nbsp;&#8381;
          </li>
          <li className={styles['card-content__text']}>
            {monthlyPayment}
          </li>
          <li className={styles["card-content__header"]}>
            Срок, мес.
          </li>
          <li className={styles['card-content__text']}>
            {monthQuantity}
          </li>
          <li className={styles["card-content__header"]}>
            Ставка,&nbsp;%
          </li>
          <li className={styles['card-content__text']}>
            {rate}
          </li>
          <li className={styles["card-content__header"]}>
            Комиссия,&nbsp;%
          </li>
          <li className={styles['card-content__text']}>
            {commission}
          </li>
          <li className={styles["card-content__header"]}>
            Общая сумма выплат,&nbsp;&#8381;
          </li>
          <li className={styles['card-content__text']}>
            {Math.round(totalSum)}
          </li>
        </ul>
      );
    })
  );
}

export default CardsRequests;
