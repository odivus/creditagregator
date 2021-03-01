interface RequestCreateProps {
  fromDbUserGoodsAdded: Array<{
    _id: string,
    price: number,
    quantity: number,
    model: string,
    category?: string,
    brand: string
  }>;
}

export default RequestCreateProps;