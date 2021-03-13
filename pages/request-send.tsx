import {useState, useEffect} from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import RequestSendContent from '../components/Request-send-content/Request-send-content';
import CardsRequestSend from '../components/Cards-request-send/Cards-request-send';
import ContentWrapper from '../components/Content-wrapper/Content-wrapper';
import BankSelected from '../components/Bank-selected/Bank-selected';
import Steps from '../components/Steps/Steps';
import Head from 'next/head';

export async function getServerSideProps() {
  await dbConnect();

  const user = await getUserById('5fec5250f79e186ea110fb6f');
  const { selected_goods } = user;

  return {
    props: {
      fromDbUserGoodsAdded: selected_goods,
    },
  };
}

function RequestSend({ fromDbUserGoodsAdded }) {
  const [ selectedBank, setSelectedBank ] = useState(null);

  useEffect(() => {
    if (window.sessionStorage) {
      const selectedBank = sessionStorage.getItem('selectedBank');
      if (selectedBank) setSelectedBank(JSON.parse(selectedBank));
    }
  }, []);

  console.dir(selectedBank);

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
