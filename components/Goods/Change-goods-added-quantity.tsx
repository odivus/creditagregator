import Quantity from '../Ui/Quantity/Quantity';

interface Props {
  quantity: number;
  changeGoodsItemQuantity: any;
}

function ChangeGoodsAddedQuantity(props: Props) {
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
