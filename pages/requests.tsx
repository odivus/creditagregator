import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import RequestsContent from '../components/Requests-content/requests-content';
import Head from 'next/head';

function Requests() {
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
          <form className='custom-radio'>
            <label>
              <input
                className='with-gap'
                name='group3'
                type='radio'
                defaultChecked
              />
              <span>Все</span>
            </label>
            <label>
              <input className='with-gap' name='group3' type='radio' />
              <span>Одобренные</span>
            </label>
            <label>
              <input className='with-gap' name='group3' type='radio' />
              <span>Отклоненные</span>
            </label>
          </form>
          <RequestsContent />
        </div>
      </div>
    </>
  ); 
}

export default Requests;
