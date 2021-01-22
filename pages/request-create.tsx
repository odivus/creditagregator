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
  // const goodsData = JSON.parse(categoriesGoods);
  // console.log(categoriesGoods);

  const selectData = {
    Ноутбуки: {
      Apple: ['MacBook Pro 13', 'MacBook Pro 16'],
      Asus: ['ZenBook 13', 'ZenBook 15', 'VivoBook'],
      Dell: ['XPS 13', 'XPS 15', 'Latitude'],
    },
    Планшеты: {
      Apple: ['iPad Micro', 'iPad Mini', 'iPad Pro'],
      Samsung: ['Galaxy Tab 10', 'Galaxy Tab 7', 'Galaxy ProTab 12'],
    },
  };

  const [categories, setCategories] = useState(Object.keys(selectData));
  const [brands, setBrands] = useState(Object.keys(selectData[categories[0]]));
  const [models, setModels] = useState(selectData[categories[0]][brands[0]]);

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]
  );
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  function changeCategories(e) {
    const { value } = e.target;

    setModels(selectData[value][brands[0]]);
    setSelectedBrand(brands[0]);
    setBrands(Object.keys(selectData[value]));
    setSelectedCategory(value);

  }

    console.log(brands[0]);
    console.log(selectedCategory);
    console.log(selectedBrand);

  function changeBrands(e) {
    const { value } = e.target;

    setSelectedBrand(value);
    setModels(selectData[selectedCategory][value]);

  }

  const pageProps = {
    changeCategories,
    changeBrands,
    selectedBrand,
    categories,
    brands,
    models,
  };

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
