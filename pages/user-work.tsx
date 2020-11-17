import Header from "../components/Header/Header";
import HeadGlobal from "../components/Head-global/Head-global";
import Head from "next/head";

function UserWork() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
        <title>Работа</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Работа</h5>
          <form action='' className='user-data'>
            <div className='input-field'>
              <input id='work' type='text' className='validate' />
              <label htmlFor='work'>Место работы</label>
            </div>

            <div className='input-field'>
              <input id='appointment' type='text' className='validate' />
              <label htmlFor='appointment'>Должность</label>
            </div>

            <div className='input-field'>
              <input id='income' type='text' className='validate' />
              <label htmlFor='income'>Доход, &#8381;/мес.</label>
            </div>

            <button
              className='btn waves-effect waves-light block-centered btn-custom_submit btn-custom_green'
              type='submit'
              name='action'
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserWork;
