import Header from "../components/Header/Header";
import HeadGlobal from "../components/Head-global/Head-global";
import Head from "next/head";

function UserContacts() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
        <title>Контактная информация</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Контактная информация</h5>
          <form action='' className='user-data'>
            <div className='input-field'>
              <input id='mibile_phone' type='text' className='validate' />
              <label htmlFor='mibile_phone'>Мобильный телефон</label>
            </div>
            <div className='input-field'>
              <input id='email' type='text' className='validate' />
              <label htmlFor='email'>Электронная почта</label>
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

export default UserContacts;
