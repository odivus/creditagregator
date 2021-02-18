import Quantity from '../Ui/Quantity/Quantity';

function ChangeGoodsAddedQuantity(props) {
  const {
    quantity,
    changeGoodsItemQuantity
  } = props;

  return (
    <Quantity
      setQuantity={changeGoodsItemQuantity}
      quantity={quantity}
    />
  );
}

export default ChangeGoodsAddedQuantity;
