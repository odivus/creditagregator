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
              После добавления необходимой функциональности и&nbsp;создания
              серверной части, приложение может составить конкуренцию
              на&nbsp;рынке существующих решений по&nbsp;подбору банковских
              кредитных продуктов.
            </p>
            <h6>Используемые технологии</h6>
            <p className='p-h6-first'>Nextjs, Mongoosejs, TypeScript, Sass Scss, Materialize</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Index;
