import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import dbUpdateUserData from '../database/db-update-user-data';

import UserDataProps from '../Interfaces/User-data-props';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Steps from '../components/Steps/Steps';
import RequestSendContent from '../components/Request-send-content/Request-send-content';
import FooterBack from '../components/Footer-back/Footer-back';

import Error from '../components/Error/Error';
import {requestNotSend} from '../components/Error/error-messages';

export async function getServerSideProps() {
  await dbConnect();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (!user) return {
    props: {
      error: true,
      user: {
        _id: '',
        selected_goods: [
          {
            _id: '',
            category: '',
            brand: '',
            model: '',
            price: 0,
            quantity: 0,
          },
        ],
        requests: [{
          selectedBank: '',
          requestStatus: false,
          montHlyPayment: 0,
          monthQuantity: 0,
          rate: 0,
          commission: 0,
          totalSum: 0,
        }],
      },
    },
  };

  return {
    props: {
      error: false,
      requestsLength: user.requests.length,
      user,
    },
  };
}

interface Props extends UserDataProps {
  requestsLength: number;
  error: boolean;
}

function RequestSendMessage({ error }) {
  if (error) return (
    <Error errorMessage={requestNotSend} />
  );

  return (
    <article className="block-centered">
      <h5>Заявка отправлена в банк</h5>
      <p>Подробная информация доступна в разделе <Link href='/requests'><a>&laquo;Заявки&raquo;</a></Link></p>
    </article>
  );
}

function RequestSend(props: Props) {
  const { selected_goods, requests } = props.user;
  const { error, requestsLength } = props;
  const router = useRouter();

  const [selectedBank, setSelectedBank] = useState(null);
  const [totalSum, setTotalSum] = useState(0);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [monthQuantity, setMonthQuantity] = useState(0);

  const [userRequestsData,  setUserRequestsData] = useState(null);
  const [requestSendDone, setRequestSendDone] = useState(false);

  const [userRequestsLength, setUserRequestsLength] = useState(requestsLength);

  const { _id } = props.user;
 
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
    if (selectedBank) {
      if (monthlyPayment > 0 && monthQuantity > 0) {
        setUserRequestsData({
          id: _id,
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
    }
  }, [selectedBank, monthlyPayment, monthQuantity, totalSum]);

  function updateUserRequestsData() {
    if (userRequestsData) {
      const dbUserRequests = props.user.requests;
      const duplicates = dbUserRequests.filter(requests => {
        return requests.selectedBank === selectedBank.name 
               && requests.monthQuantity === monthQuantity
               && requests.totalSum === totalSum
      });

      if (duplicates.length === 0) {
        dbUpdateUserData(userRequestsData)
          .then(result => {
            if (result) dbUpdateUserData({
              id: _id,
              selected_goods: [],
            })
          })
        window.sessionStorage.clear();
      } else {
        dbUpdateUserData({
          id: _id,
          selected_goods: [],
        });
        window.sessionStorage.clear();
      }
    };
  }

  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Отправить заявку</title>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
      </Head>
      <Header requestsLength={userRequestsLength} />
      <Steps />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          {
            requestSendDone || error
            ? <RequestSendMessage error={error} /> 
            : <>
                <RequestSendContent 
                  totalSum={totalSum}
                  selectedBank={selectedBank}
                  selected_goods={selected_goods}
                />
                <button 
                className='btn btn-large-custom waves-effect waves-light btn-custom_green btn-custom_request-send block-centered'
                onClick={() => {
                  setUserRequestsLength(userRequestsLength + 1);
                  updateUserRequestsData();
                  setRequestSendDone(true);
                }}
                >
                  Отправить заявку
                </button>
                <FooterBack 
                  href='/calculator'
                  text='Вернуться к&nbsp;выбору банков'
                />
              </>
          }
        </div>
      </div>
    </>
  );
}

export default RequestSend;