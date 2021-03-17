import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import dbUpdateUserData from '../database/db-update-user-data';

import UserDataProps from '../Interfaces/User-data-props';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import CardsRequestSend from '../components/Cards-request-send/Cards-request-send';
import ContentWrapper from '../components/Content-wrapper/Content-wrapper';
import BankSelected from '../components/Bank-selected/Bank-selected';
import TotalGoodsSum from '../components/Goods-sum/Total-goods-sum';
import Steps from '../components/Steps/Steps';
import Head from 'next/head';

export async function getServerSideProps() {
  await dbConnect();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (user) return {
    props: {
      fromDbUserGoodsAdded: user.selected_goods,
      requests: user.requests,
    }
  };

  if (!user) return {
    props: {
      fromDbUserGoodsAdded: null,
    }
  };
}

function RequestSend({ fromDbUserGoodsAdded, requests }) {
  const router = useRouter();

  const [ selectedBank, setSelectedBank ] = useState(null);
  const [ totalSum, setTotalSum ] = useState(0);

  const [ monthlyPayment, setMonthlyPayment ] = useState(0);
  const [ monthQuantity, setMonthQuantity ] = useState(0);

  const [ userRequestsData,  setUserRequestsData ] = useState(null);
 
  useEffect( () => window.scrollTo(0, 0) );

  useEffect(() => {
    const bank = sessionStorage.getItem('selectedBank');
    
    if (!bank) {
      router.push('/request-create');
    } else {
      setSelectedBank(JSON.parse(bank));
    }
  }, []);

  useEffect(() => {
    const goodsPriceSum = sessionStorage.getItem('goodsPriceSum');
    
    const monthlyPayment = sessionStorage.getItem('monthlyPayment');
    const monthQuantity = sessionStorage.getItem('monthQuantity');

    if (monthlyPayment) setMonthlyPayment(parseInt(monthlyPayment, 10));
    if (monthQuantity) setMonthQuantity(parseInt(monthQuantity, 10));

    if (goodsPriceSum && selectedBank) {
      const { commission, rate } = selectedBank;
      const goodsSum = parseInt(goodsPriceSum, 10);

      const goodsTotalSum = goodsSum + (goodsSum * rate / 100) 
                          + (goodsSum * commission / 100);

      setTotalSum(goodsTotalSum);
    };
  });

  useEffect(() => {
    if (monthlyPayment > 0 && monthQuantity > 0) {
      setUserRequestsData({
        id: '5fec5250f79e186ea110fb6f',
        requests: [
          ...requests,
          {
            selectedBank: selectedBank.name,
            requestStatus: true,
            rate: selectedBank.rate,
            commission: selectedBank.commission,
            monthlyPayment,
            monthQuantity,
            totalSum,
          },
        ],
      });
    }
  }, [selectedBank, monthlyPayment, monthQuantity, totalSum]);

  function updateUserRequestsData() {
    if (userRequestsData) {
      dbUpdateUserData(userRequestsData);
      router.push('/requests');
    };
  }

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Отправка заявки</title>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
      </Head>
      <Header />
      <Steps />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <article className='block-centered'>
            <h5 className='page-header-hide'>Отправка заявки</h5>
            <p>
              Отправляемая вами заявка в&nbsp;банк будет рассмотрена
              в&nbsp;автоматическом режиме новейшей системой
              с&nbsp;искусственным ителлектом. Принятие решения системой
              о&nbsp;выдаче кредита займет несколько нано- секунд.
            </p>
            <p>
              Результат рассмотрения заявки придет на&nbsp;адрес вашей
              электронной почты и&nbsp;будет доступен в&nbsp;разделе &laquo;
              <a href='/requests'>Заявки</a>&raquo;.
            </p>
          </article>
          <h5>Выбранный Банк</h5>
          <div className='content-wrap conten-wrap_bank-selected'>
            <div className='content-wrapper content-wrapper_bank-selected'>
              {
                selectedBank 
                ? <BankSelected selectedBank={selectedBank} /> 
                : null 
              }
            </div>
          </div>
          <h5>Выбранный товар</h5>
          <ContentWrapper 
            props={{
              fromDbUserGoodsAdded
            }}
            CardsComponent={CardsRequestSend}
          />
          {
            selectedBank 
            ? <TotalGoodsSum totalSum={totalSum} />
            : null
          }

          <button 
            className='btn btn-large-custom waves-effect waves-light btn-custom_green btn-custom_request-send block-centered'
            onClick={updateUserRequestsData}
          >
            Отправить заявку
          </button>
          
          <div className='footer-back'>
            <i className='material-icons'>chevron_left</i>
            <a className='footer-link' href='/calculator'>
              Вернуться к&nbsp;выбору банков
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestSend;
