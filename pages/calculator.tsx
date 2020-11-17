import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import BanksOffer from '../components/Banks-offer/Banks-offer';
import CreditCalculator from '../components/Credit-calculator/Credit-calculator';
import Steps from '../components/Steps/Steps';
import Head from 'next/head';

import cx from "classnames";
import styles from "../components/Steps/Steps.module.scss";

function Calculator() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Калькулятор</title>
        {/* <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script> */}
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
      <CreditCalculator />
      <BanksOffer />
    </>
  );
}

export default Calculator;
