import scrollTop from "../../utilities/scroll-top";
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';
import cx from 'classnames';

function RequestsContent() {
  return (
    <div className='content-wrap content-wrap_paddings'>
      <div className='content-wrapper'>
        <ul className={cx(styles["card-content"], styles["card-content_ok"])}>
          <li className={styles["card-content__header"]}>Банк</li>
          <li className={styles["card-content__text_size_big"]}>Бета Банк</li>
          <li
            className={cx(
              styles["card-content-verdict"],
              styles["card-content-verdict_ok"]
            )}
          >
            ОДОБРЕНО
          </li>
          <li className={styles["card-content__header"]}>Тариф</li>
          <li className={styles['card-content__text']}>Стандарт</li>
          <li className={styles["card-content__header"]}>Срок, мес.</li>
          <li className={styles['card-content__text']}>18</li>
          <li className={styles["card-content__header"]}>Ежемесячный платеж</li>
          <li className={styles['card-content__text']}>97&nbsp;108,97&nbsp;&#8381;</li>
          <li className={styles["card-content__header"]}>Ставка</li>
          <li className={styles['card-content__text']}>18,5&nbsp;%</li>
          <li className={styles["card-content__header"]}>Общая сумма выплат</li>
          <li className={styles['card-content__text']}>
            10&nbsp;613&nbsp;747,64&nbsp;&#8381;
          </li>
        </ul>

        <ul className={cx(styles["card-content"], styles["card-content_ok"])}>
          <li className={styles["card-content__header"]}>Банк</li>
          <li className={styles["card-content__text_size_big"]}>Бета Банк</li>
          <li
            className={cx(
              styles["card-content-verdict"],
              styles["card-content-verdict_reject"]
            )}
          >
            ОТКЛОНЕНО
          </li>
          <li className={styles["card-content__header"]}>Причина отказа</li>
          <li className={styles["card-content-reason"]}>
            У вас непогашенный кредит на сумму
            100&nbsp;500&nbsp;000&nbsp;000&nbsp;000&nbsp;&#8381;
          </li>
          <li className={styles["card-content__header"]}>Тариф</li>
          <li className={styles['card-content__text']}>Стандарт</li>
          <li className={styles["card-content__header"]}>Срок, мес.</li>
          <li className={styles['card-content__text']}>18</li>
          <li className={styles["card-content__header"]}>Ежемесячный платеж</li>
          <li className={styles['card-content__text']}>97&nbsp;108,97&nbsp;&#8381;</li>
          <li className={styles["card-content__header"]}>Ставка</li>
          <li className={styles['card-content__text']}>18,5&nbsp;%</li>
          <li className={styles["card-content__header"]}>Общая сумма выплат</li>
          <li className={styles['card-content__text']}>
            10&nbsp;613&nbsp;747,64&nbsp;&#8381;
          </li>
        </ul>

        <a href='#' className='scroll-up' onClick={scrollTop}>
          <i className='small material-icons'>arrow_drop_up</i>
        </a>
      </div>
    </div>
  );
}

export default RequestsContent;
