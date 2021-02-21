export default function convertCategoriesGoodsData(categoriesGoods) {
  let data,
      convertedData = {};

  if (!categoriesGoods) return null;

  categoriesGoods.forEach(item => {
    return data = {
      ...data,
      [item.name]: item.goods.map(goodsItem => {
        return [goodsItem.brand, goodsItem]
      })
    }
  });  

  for (let key in data) {
    let modifyData = {};

    data[key].forEach(item => {
      if (item[0] in modifyData) {
        modifyData[item[0]].push(item[1]);
      } else {
        modifyData[item[0]] = [item[1]];
      }
    });

    convertedData = {
      ...convertedData,
      [key]: modifyData
    }
  }

  return convertedData;
}