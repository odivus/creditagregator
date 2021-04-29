import { useState, useEffect } from 'react';
import dbConnect from '../database/db-connect';
import getCategoriesGoods from '../database/db-get-categories-goods';
import getUserById from '../database/db-get-user-by-id';
import Head from 'next/head';

import RequestCreateProps from '../Interfaces/Request-create-props';
import CategoriesGoods from '../Interfaces/Categories-goods';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Steps from '../components/Steps/Steps';
import Goods from '../components/Goods/Goods';

import Error from '../components/Error/Error';
import {userDataUnavailable} from '../components/Error/error-messages';

import customSelect from '../utilities/custom-select';
import convertCategoriesGoodsData from '../utilities/convert-categories-goods-data';

if (typeof window !== 'undefined'){
  const M = require("materialize-css/dist/js/materialize.min.js");
}

export async function getServerSideProps() {
  await dbConnect();

  const categoriesGoods = await getCategoriesGoods();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (!categoriesGoods || !user) return {
    props: {
      error: true,
      requestsLength: 0,
      categoriesGoods: [{
        name: '',
        brand: '',
        goods: [
          {
            brand: '',
            model: '',
            price: 0,
            _id: '',
          },
        ],
      }],
      fromDbUserGoodsAdded: null,
    }
  };
  
  return {
    props: {
      error: false,
      requestsLength: user.requests.length,
      categoriesGoods: JSON.parse(categoriesGoods),
      fromDbUserGoodsAdded: user.selected_goods,
    }
  };
}

interface Props extends RequestCreateProps {
  categoriesGoods: Array<CategoriesGoods>;
  requestsLength: number;
  error: boolean;
};

function RequestCreate(props: Props) {
  useEffect( () => customSelect() );
  
  const { 
    categoriesGoods, 
    fromDbUserGoodsAdded, 
    requestsLength, 
    error 
  } = props;
  
  const selectData = convertCategoriesGoodsData(categoriesGoods);

  const [categories] = useState(Object.keys(selectData));
  const firstCategory = categories[0];

  const [brands, setBrands] = useState(Object.keys(selectData[firstCategory]));
  const firstBrand = brands[0];

  const [ models, setModels] = useState(selectData[firstCategory][firstBrand]);
  const firstModel = models[0];

  const [selectedCategory, setSelectedCategory] = useState(firstCategory);
  const [selectedBrand, setSelectedBrand] = useState(firstBrand);
  const [selectedModel, setSelectedModel] = useState(
    selectData[selectedCategory][firstBrand][0]
  );

  const [selectedFullModel, setSelectedFullModel] = useState(firstModel);

  const pageProps = {
    fromDbUserGoodsAdded,
    changeBrands,
    changeModels,
    changeCategories,
    selectedCategory,
    selectedBrand,
    selectedModel,
    categories,
    brands,
    models: models.map((item: {model: string}) => item.model),
    selectedFullModel: {
      ...selectedFullModel, 
      category: selectedCategory,
      brand: selectedBrand,
    },
  };

  function changeCategories(e: React.FormEvent<EventTarget>) {
    const { value } = e.target as HTMLInputElement;

    const brands = Object.keys(selectData[value]);
    const firstBrand = brands[0];

    const models = selectData[value][firstBrand];
    const firstModel = models[0];

    setBrands(brands);
    setModels(models);

    setSelectedCategory(value);
    setSelectedBrand(firstBrand);
    setSelectedModel(firstModel);
    setSelectedFullModel(firstModel);
  }

  function changeBrands(e: React.FormEvent<EventTarget>) {
    const { value } = e.target as HTMLInputElement;

    const models = selectData[selectedCategory][value];
    const firstModel = models[0];

    setModels(models);
    setSelectedBrand(value);
    setSelectedModel(firstModel);
    setSelectedFullModel(firstModel);
  }

  function changeModels(e: React.FormEvent<EventTarget>) {
    const { value } = e.target as HTMLInputElement;
    const model = models.find((item: {model: string}) => item.model === value);

    setSelectedModel(value);
    setSelectedFullModel(model);
  }

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Оформить заявку</title>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
      </Head>
      <Header requestsLength={requestsLength} />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='h5-mobile-top h5-mobile-top_hide'>Оформить заявку</h5>
        </div>
      </div>
      {
        error
        ? <Error errorMessage={userDataUnavailable} />
        : <>
            <Steps />
            <Goods {...pageProps} />
          </>
      }
    </>
  );
}

export default RequestCreate;
