import CategoriesGoods from '../Interfaces/Categories-goods';

function convertCategoriesGoodsData(
  categoriesGoods: Array<CategoriesGoods>
): {} {
  let convertedData = {};
  let data: {
    name: string,
    brand: string,
    goods: []
  };

  if (!categoriesGoods || categoriesGoods.length <= 1) {
    return {
      category: {
        brand: [{
          brand: '',
          model: '',
          price: 0,
          _id: '',
        }]
      }
    }
  };

  categoriesGoods.forEach(item => {
    return data = {
      ...data,
      [item.name]: item.goods.map((goodsItem: { brand: string }) => {
        return [goodsItem.brand, goodsItem]
      })
    }
  });  

  for (let key in data) {
    let modifyData = {};

    data[key].forEach((item: string) => {
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

export default convertCategoriesGoodsData;