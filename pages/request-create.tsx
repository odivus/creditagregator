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

  // const user = await getUserById('5fec5250f79e186ea110fb6f');

  const categoriesGoods = await getCategoriesGoods();

  return {
    props: {
      categoriesGoods,
      // goods
    },
  };
}

function RequestCreate(props) {
  useEffect(() => {
    customSelect();
  }, []);

  const { categoriesGoods } = props;
  console.log(JSON.parse(categoriesGoods));

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Оформить заявку</title>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </Head>
      <Header />
      <div className={cx(styles["steps-header"], "flex-centered")}>
        <h5>
          <a href='#' className='header-link'>
            <span className='text-link_dashed header-link_dashed'>
              Выбор товара
            </span>
          </a>
        </h5>
      </div>
      <Steps />
      <Goods />
    </>
  );
}

export default RequestCreate;
