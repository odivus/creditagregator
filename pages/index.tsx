import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Head from 'next/head';

function Index() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Unicredit &mdash; прототип сервиса по подбору кредитов</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <article className='faq block-centered'>
            <h5 className='page-header'>
              Unicredit&nbsp;&mdash; прототип сервиса по&nbsp;подбору кредитов
              на&nbsp;приобретаемые товары
            </h5>
            <p>
              После добавления необходимой функциональности и&nbsp;создания
              серверной части, приложение может составить конкуренцию
              на&nbsp;рынке существующих решений по&nbsp;подбору банковских
              кредитных продуктов.
            </p>
            <h6>Используеемые технологии</h6>
            <p>Next.js, TypeScript, Sass Scss, Materialize</p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Index;
