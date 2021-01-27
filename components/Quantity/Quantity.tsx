import styles from './Quantity.module.scss';

function Quantity({ quantity, setQuantity }) {
  function checkSetQuantity(quantity) {
    (quantity <= 1) ? setQuantity(1) : setQuantity(--quantity);
  }

  return (
    <div className={`${styles.quantity} flex-centered`}>
      <span onClick={() => checkSetQuantity(quantity)}>&ndash;</span>
      <span>{quantity}</span>
      <span onClick={() => setQuantity(++quantity)}>&#43;</span>
    </div>
  );
}

export default Quantity;
