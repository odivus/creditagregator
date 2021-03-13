import cx from 'classnames';
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

function CardsRequestSend({ fromDbUserGoodsAdded }) {
  interface DataItem {
    _id: string;
    brand: string;
    model: string;
    price: number;
    category: string;
    quantity: number;
  }

  return (
    fromDbUserGoodsAdded.map((item: DataItem) => {
      return (
        <ul
          key={item._id}
          className={cx(styles['card-content'])}
        >
          <li>
            <h6>{item.brand + ' ' + item.model}</h6>
          </li>
          <li className={cx(styles['card-content__header'])}>
            Категория
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.category}
          </li>
          <li className={cx(styles['card-content__header'])}>
            Бренд
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.brand}
          </li>
          <li className={cx(styles['card-content__header'])}>
            Модель
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.model}
          </li>
          <li className={cx(styles['card-content__header'])}>
            Цена,&nbsp;&#8381;
          </li>
          <li className={cx(styles['card-content__text'])}>
            {
              item.quantity > 1 
              ? `${item.price}&nbsp;&times;${item.quantity}`
              : item.price
            }
          </li>
          <li className={cx(styles['card-content__header'])}>
            Количество
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.quantity}
          </li>
          <li className={cx(styles['card-content__header'])}>
            Сумма,&nbsp;&#8381;
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.price * item.quantity}
          </li>
        </ul>
      );
    })
  );
}

export default CardsRequestSend;
