import {useState} from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import filterByRequestStatus from '../utilities/filter-by-request-status';

import UserDataProps from '../Interfaces/User-data-props';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import RequestFilter from '../components/Request-filter/Request-filter';
import RequestsShowContent from '../components/Requests-show-content/Requests-show-content';
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

  return {
    props: {
      error: false,
      requestsLength: user.requests.length,
      user,
    },
  };
}

interface Props extends UserDataProps {
  error: boolean;
  requestsLength: number;
}

function Requests(props: Props) {
  const { requests } = props.user;
  const { error, requestsLength } = props;

  const requestsStatusRejected = requests.find(request => {
    return request.requestStatus === false;
  });

  const [requestFilter, setRequestFilter] = useState('all');
  
  const filteredByStatusRequests = filterByRequestStatus(requests, requestFilter);
  
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Заявки</title>
      </Head>
      <Header requestsLength={requestsLength} />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='h5-mobile-top'>
            Заявки на&nbsp;получение кредита
            <span className='requests-quantity'>
              {requests.length}
            </span>
          </h5>
          {
            !requests || requests.length as number === 0 ||!requestsStatusRejected
              ? null
              : <RequestFilter setRequestFilter={setRequestFilter} /> 
          }
          <RequestsShowContent 
            error={error}
            requests={requests}
            filteredByStatusRequests={filteredByStatusRequests}
          />
        </div>
      </div>
    </>
  ); 
}

export default Requests;
