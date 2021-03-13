import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import dbConnect from '../database/db-connect';
import getBanks from '../database/db-get-banks';

import Banks from '../Interfaces/Banks';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import ContentWrapper from '../components/Content-wrapper/Content-wrapper';
import CardsCalculator from '../components/Cards-calculator/Cards-calculator';
import CreditCalculator from '../components/Credit-calculator/Credit-calculator';
import Steps from '../components/Steps/Steps';
import Head from 'next/head';

import cx from "classnames";
import styles from "../components/Steps/Steps.module.scss";

export async function getServerSideProps() {
  await dbConnect();
  const banks = await getBanks();

  return {
    props: {
      banks: JSON.parse(banks),
    },
  };
}

function Calculator(props: {banks: Array<Banks>}) {
  const router = useRouter();
  const [goodsPriceSum, setGoodsPriceSum] = useState(1);
 
  const [monthQuantity, setMonthQuantity] = useState(1);
  const [parentMonthlyPayment, setParentMonthlyPayment] = useState(
    Math.round(goodsPriceSum / 12)
  );

  const { banks } = props;
  const filteredBanks = banks.filter(bank => {
    if (bank.term === monthQuantity) return bank;
  });

  useEffect(() => {
    if (!window.sessionStorage.goodsPriceSum) {
      router.push('/request-create');
    } else {
      setGoodsPriceSum(parseInt(sessionStorage.getItem('goodsPriceSum'), 10));
      setParentMonthlyPayment(Math.round(goodsPriceSum / 12));
    }
  }, [goodsPriceSum]);

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Калькулятор</title>
      </Head>
      <Header />
      <div className={cx(styles["steps-header"], "flex-centered")}>
        <h5>
          <a href='#' className='header-link'>
            <span className='text-link_dashed header-link_dashed'>
              Калькулятор
            </span>
          </a>
        </h5>
      </div>
      <Steps />
      <CreditCalculator
        goodsPriceSum={goodsPriceSum}
        setMonthQuantity={setMonthQuantity}
        setParentMonthlyPayment={setParentMonthlyPayment}
      />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className="h5-calculator-page">Предложения банков</h5>
          <ContentWrapper 
            props={{
              parentMonthlyPayment,
              filteredBanks,
            }} 
            CardsComponent={CardsCalculator}
          />
          <div className='footer-back'>
            <i className='material-icons'>chevron_left</i>
            <a className='footer-link' href='/request-create'>
              Вернуться к&nbsp;выбору товаров
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
