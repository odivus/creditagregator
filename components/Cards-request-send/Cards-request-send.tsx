import cx from 'classnames';
import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

interface Props {
  selected_goods: Array<Object>;
}

function CardsRequestSend(props: Props) {
  const { selected_goods } = props;
  interface DataItem {
    _id: string;
    brand: string;
    model: string;
    price: number;
    category: string;
    quantity: number;
  }

  return (
    selected_goods.map((item: DataItem) => {
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
            Количество
          </li>
          <li className={cx(styles['card-content__text'])}>
            {item.quantity}
          </li>
          <li className={cx(styles['card-content__header'])}>
            Цена
            {
              item.quantity > 1 
              ? ` \u00D7 ${item.quantity}`
              : ''
            }
            , &#8381;
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
