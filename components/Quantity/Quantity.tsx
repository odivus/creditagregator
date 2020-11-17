import styles from './Quantity.module.scss';

function Quantity() {
  return (
    <div className={`${styles.quantity} flex-centered`}>
      <span>&ndash;</span>
      <span>1</span>
      <span>&#43;</span>
    </div>
  );
}

export default Quantity;
