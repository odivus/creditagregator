import Header from "../components/Header/Header";
import HeadGlobal from "../components/Head-global/Head-global";
import Head from "next/head";

function UserHomeAdress() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
        <title>Домашний адрес</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Домашний адрес</h5>
          <form action='' className='user-data'>
            <div className='input-field'>
              <input id='city' type='text' className='validate' />
              <label htmlFor='city'>Город</label>
            </div>

            <div className='input-field'>
              <input id='adress_one' type='text' className='validate' />
              <label htmlFor='adress_one'>адрес 1</label>
            </div>

            <div className='input-field'>
              <input id='adress_two' type='text' className='validate' />
              <label htmlFor='adress_two'>адрес 2</label>
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

export default UserHomeAdress;
