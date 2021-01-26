import { useState, useEffect } from 'react';
import dbConnect from '../lib/db-connect';
import getCategoriesGoods from '../lib/db-get-categories-goods';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Steps from '../components/Steps/Steps';
import Goods from '../components/Goods/Goods';
import Head from 'next/head';

import customSelect from '../utilities/custom-select';
import cx from 'classnames';
if (typeof window !== 'undefined'){
  const M = require("materialize-css/dist/js/materialize.min.js");
}

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
  // console.log(categoriesGoods);

  // Здесь же получать добавленные юзером товары и передавать их по дереву вниз
  // Apple: [{model: 'MacBook Pro 13', price, quantity, _id:''12345 }, {...}]

  const selectData = {
    Ноутбуки: {
      Apple: [
        { model: 'MacBook Pro 13', price: 145000, quantity: 1, _id: '12345' },
        { model: 'MacBook Pro 16', price: 283000, quantity: 1, _id: '12346' },
      ],
      Asus: [
        { model: 'ZenBook 13', price: 109000, quantity: 1, _id: '12347' },
        { model: 'ZenBook 15', price: 130000, quantity: 1, _id: '12348' },
        { model: 'VivoBook', price: 78000, quantity: 1, _id: '12349' },
      ],
      Dell: [
        { model: 'XPS 13', price: 135000, quantity: 1, _id: '12350' },
        { model: 'XPS 15', price: 178000, quantity: 1, _id: '12351' },
        { model: 'Latitude', price: 72000, quantity: 1, _id: '12352' },
      ],
    },
    Планшеты: {
      Apple: [
        { model: 'iPad Micro', price: 40000, quantity: 2, _id: '12353' },
        { model: 'iPad Mini', price: 69000, quantity: 1, _id: '12354' },
        { model: 'iPad Pro', price: 135000, quantity: 1, _id: '12355' },
      ],
      Samsung: [
        { model: 'Galaxy Tab 10', price: 68000, quantity: 1, _id: '12356' },
        { model: 'Galaxy Tab 7', price: 52000, quantity: 1, _id: '12357' },
        { model: 'Galaxy ProTab 12', price: 99000, quantity: 1, _id: '12358' },
      ],
    },
  };
  // const selectData = {
  //   Ноутбуки: {
  //     Apple: ['MacBook Pro 13', 'MacBook Pro 16'],
  //     Asus: ['ZenBook 13', 'ZenBook 15', 'VivoBook'],
  //     Dell: ['XPS 13', 'XPS 15', 'Latitude'],
  //   },
  //   Планшеты: {
  //     Apple: ['iPad Micro', 'iPad Mini', 'iPad Pro'],
  //     Samsung: ['Galaxy Tab 10', 'Galaxy Tab 7', 'Galaxy ProTab 12'],
  //   },
  // };

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

  const selectedGoodsItem = {
    Категория: selectedCategory,
    Брэнд: selectedBrand,
    Модель: selectedFullModel,
  };

  console.log(selectedGoodsItem);

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
  };

  function changeCategories(e) {
    const { value } = e.target;

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

  function changeBrands(e) {
    const { value } = e.target;

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

  console.log(selectedCategory);
  console.log(selectedBrand);
  console.log(selectedModel);

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
