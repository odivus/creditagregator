import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import dbConnect from '../database/db-connect';
import getBanks from '../database/db-get-banks';
import getUserById from '../database/db-get-user-by-id';

import Banks from '../Interfaces/Banks';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import ContentWrapper from '../components/Content-wrapper/Content-wrapper';
import CardsCalculator from '../components/Cards-calculator/Cards-calculator';
import CreditCalculator from '../components/Credit-calculator/Credit-calculator';
import Steps from '../components/Steps/Steps';
import FooterBack from '../components/Footer-back/Footer-back';
import Head from 'next/head';

import Error from '../components/Error/Error';
import {userDataUnavailable} from '../components/Error/error-messages';

export async function getServerSideProps() {
  await dbConnect();
  const banks = await getBanks();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (!banks || !user) return {
    props: {
      error: true,
      requestsLength: 0,
      banks: [
        {
          _id: '',
        },
      ],
    },
  }

  return {
    props: {
      error: false,
      requestsLength: user.requests.length,
      banks: JSON.parse(banks),
    },
  };
}

interface Props {
  banks: Array<Banks>;
  requestsLength: number; 
  error: boolean;
}

function Calculator(props: Props) {
  const router = useRouter();
  const [goodsPriceSum, setGoodsPriceSum] = useState(1);
 
  const [monthQuantity, setMonthQuantity] = useState(1);
  const [
    parentMonthlyPayment, 
    setParentMonthlyPayment
  ] = useState(goodsPriceSum);

  const { banks, error, requestsLength } = props;

  const filteredBanks = banks.filter(bank => {
    if (bank.term === monthQuantity) return bank;
  });

  useEffect(() => {
    const goodsPriceSum = sessionStorage.getItem('goodsPriceSum');

    if (!goodsPriceSum) {
      router.push('/request-create');
    } else {
      const goodsPriceSumNumber = parseInt(goodsPriceSum, 10);
      
      setGoodsPriceSum(goodsPriceSumNumber);
      setParentMonthlyPayment(goodsPriceSumNumber);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('monthQuantity', monthQuantity.toString());
    sessionStorage.setItem('monthlyPayment', parentMonthlyPayment.toString());
  }, [monthQuantity, parentMonthlyPayment]);

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Калькулятор</title>
      </Head>
      <Header requestsLength={requestsLength} />
      {
        error
          ? <Error errorMessage={userDataUnavailable} />
          : <>
              <div className='row row_content row_custom_bottom'>
                <div className='col s12 m12 l12'>
                  <h5 className='h5-mobile-top h5-mobile-top_hide'>Калькулятор</h5>
                </div>
              </div>
              <Steps />
              <div className='row row_content row_calculator'>
                <div className='col s12 m12 l12'>
                  <CreditCalculator
                    goodsPriceSum={goodsPriceSum}
                    setMonthQuantity={setMonthQuantity}
                    setParentMonthlyPayment={setParentMonthlyPayment}
                  />
                </div>
              </div>
              <div className='row row_content'>
                <div className='col s12 m12 l12'>
                  <h5 className='h5-page'>Предложения банков</h5>
                  <ContentWrapper 
                    props={{
                      parentMonthlyPayment,
                      filteredBanks,
                    }} 
                    CardsComponent={CardsCalculator}
                  />
                  <FooterBack 
                    href='/request-create'
                    text='Вернуться к&nbsp;выбору товаров'
                  />
                </div>
              </div>
            </>
      }
    </>
  );
}

export default Calculator;
