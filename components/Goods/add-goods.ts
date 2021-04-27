function addGoods(params) {
  const [
    userId,
    goodsAdded,
    selectedFullModel,
    addGoodsQuantity,
    setGoodsAdded,
    setgoodsQuantityReset,
    setAddGoodsQuantity,
    dbUpdateUserData,
  ] = params;

  if (goodsAdded.length === 0) {
    const selected_goods = [{
      ...selectedFullModel,
      quantity: addGoodsQuantity,
    }]

    setGoodsAdded(selected_goods);
    setgoodsQuantityReset(true);
    setAddGoodsQuantity(1);

    dbUpdateUserData({
      id: userId,
      selected_goods,
    });
  }

  if (goodsAdded.length > 0) {
    const findDuplicate = goodsAdded.find(
      (item) => item._id === selectedFullModel._id
    );
    const selected_goods = [
      ...goodsAdded,
      {
        ...selectedFullModel,
        quantity: addGoodsQuantity,
      },
    ];

    if (findDuplicate) {
      setgoodsQuantityReset(true);
      return setAddGoodsQuantity(1);
    }

    setGoodsAdded(selected_goods);
    setAddGoodsQuantity(1);
    setgoodsQuantityReset(true);

    dbUpdateUserData({
      id: userId,
      selected_goods,
    });
  }
}

export default addGoods;