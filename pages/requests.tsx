import {useState} from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import filterByRequestStatus from '../utilities/filter-by-request-status';
import UserDataProps from '../Interfaces/User-data-props';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import ContentWraper from '../components/Content-wrapper/Content-wrapper';
import CardsRequests from '../components/Cards-requests/Cards-requests';
import RequestFilter from '../components/Request-filter/Request-filter';
import Head from 'next/head';

export async function getServerSideProps() {
  await dbConnect();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (!user) return {
    props: {
      error: true,
      user: {
        requests: null,
      }
    },
  };

  if (user) return {
    props: {
      error: false,
      user,
    },
  };
}

interface Props extends UserDataProps {
  error: boolean;
}

function ShowContent({ error, requests, filteredByStatusRequests }) {
  if (error) return (
    <p>Данные о заявках недоступны. Пожалуйста, попробуйте позже.</p>
  );

  if (requests && requests.length === 0) return (
    <p>У вас пока нет заявок. Их можно оформить в разделе &laquo;Оформить заявку&raquo;</p>
  );

  return (
    <ContentWraper 
      props={{requests: filteredByStatusRequests}}
      CardsComponent={CardsRequests}
    />
  );
}

function Requests(props: Props) {
  const { requests } = props.user;
  const { error } = props;

  const [requestFilter, setRequestFilter] = useState('all');
  
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Заявки</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='h5-page'>Заявки на получение кредита</h5>
          <RequestFilter setRequestFilter={setRequestFilter} />
          <ShowContent 
            error={error}
            requests={requests}
            filteredByStatusRequests={
              filterByRequestStatus(requests, requestFilter)
            }
          />
        </div>
      </div>
    </>
  ); 
}

export default Requests;
