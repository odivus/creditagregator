import {increase, decrease} from '../handlers/handlers';
import styles from './Quantity.module.scss';

interface Props {
  quantity: number;
  setQuantity: (state: number) => void;
}

function Quantity(props: Props) {
  const { setQuantity, quantity } = props;
  
  return (
    <div className={`${styles.quantity} flex-centered no-user-select`}>
      <span onClick={() => decrease(setQuantity, quantity)}>&ndash;</span>
      <span>{quantity}</span>
      <span onClick={() => increase(setQuantity, quantity)}>&#43;</span>
    </div>
  );
}

export default Quantity;