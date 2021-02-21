import { useState, useEffect } from 'react';
import dbConnect from '../database/db-connect';
import getCategoriesGoods from '../database/db-get-categories-goods';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Steps from '../components/Steps/Steps';
import Goods from '../components/Goods/Goods';
import Head from 'next/head';

import customSelect from '../utilities/custom-select';
import convertCategoriesGoodsData from '../utilities/convert-categories-goods-data';

if (typeof window !== 'undefined'){
  const M = require("materialize-css/dist/js/materialize.min.js");
}

import cx from 'classnames';
import styles from '../components/Steps/Steps.module.scss';

export async function getServerSideProps() {
  await dbConnect();

  const categoriesGoods = await getCategoriesGoods();

  return {
    props: {
      categoriesGoods: JSON.parse(categoriesGoods),
    },
  };
}

function RequestCreate(props) {
  useEffect( () => customSelect() );

  const { categoriesGoods } = props;

  const selectData = convertCategoriesGoodsData(categoriesGoods);

  const [categories] = useState(Object.keys(selectData));
  const firstCategory = categories[0];

  const [brands, setBrands] = useState(Object.keys(selectData[firstCategory]));
  const firstBrand = brands[0];

  const [models, setModels] = useState(selectData[firstCategory][firstBrand]);
  const firstModel = models[0];

  const [selectedCategory, setSelectedCategory] = useState(firstCategory);
  const [selectedBrand, setSelectedBrand] = useState(firstBrand);
  const [selectedModel, setSelectedModel] = useState(
    selectData[selectedCategory][firstBrand][0]
  );

  const [selectedFullModel, setSelectedFullModel] = useState(firstModel);

  const pageProps = {
    changeBrands,
    changeModels,
    changeCategories,
    selectedCategory,
    selectedBrand,
    selectedModel,
    categories,
    brands,
    models: models.map((item) => item.model),
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

  function changeModels(e) {
    const { value } = e.target;
    const model = models.find((item) => item.model === value);

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
      <Header />
      <div className={cx(styles['steps-header'], 'flex-centered')}>
        <h5>
          <a href='#' className='header-link'>
            <span className='text-link_dashed header-link_dashed'>
              Выбор товара
            </span>
          </a>
        </h5>
      </div>
      <Steps />
      <Goods {...pageProps} />
    </>
  );
}

export default RequestCreate;
