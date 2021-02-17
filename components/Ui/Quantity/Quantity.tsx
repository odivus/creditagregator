import {increase, decrease} from '../handlers/handlers';
import styles from './Quantity.module.scss';

function Quantity({ setQuantity, quantity }) {
  return (
    <div className={`${styles.quantity} flex-centered`}>
      <span onClick={() => decrease(setQuantity, quantity)}>&ndash;</span>
      <span>{quantity}</span>
      <span onClick={() => increase(setQuantity, quantity)}>&#43;</span>
    </div>
  );
}

export default Quantity;