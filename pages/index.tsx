import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Head from 'next/head';

export async function getServerSideProps() {
  await dbConnect();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

  if (!user) return {
    props: {
      requestsLength: 0,
    }
  };

  return {
    props: {
      requestsLength: user.requests.length,
    }
  };
}

function Index({ requestsLength }) {
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Unicredit &mdash; прототип сервиса по подбору кредитов</title>
      </Head>
      <Header requestsLength={requestsLength} />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <article className='block-centered'>
            <h5 className='h5-mobile-top'>
              Unicredit&nbsp;&mdash; прототип сервиса по&nbsp;подбору кредитов
              на&nbsp;приобретаемые товары
            </h5>
            <p className='p-h5-first'>
              После доработки до&nbsp;необходимой функциональности, данный прототип может стать реальным приложением по&nbsp;подбору банковских кредитов на&nbsp;приобретаемые товары и&nbsp;составить конкурецию существующим сервисам.
            </p>
            <h6>Используемые технологии</h6>
            <p className='p-h6-first'>Nextjs, TypeScript, Mongoose, Scss, BEM, Materialize, lottie.</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Index;
