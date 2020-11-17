import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Head from 'next/head';
  
function UserData() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <script defer src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
        <title>Персональные данные</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Персональные данные</h5>
          <form action='' className='user-data'>
            <div className='input-field'>
              <input id='surname' type='text' className='validate' />
              <label htmlFor='surname'>Фамилия</label>
            </div>

            <div className='input-field'>
              <input id='name' type='text' className='validate' />
              <label htmlFor='name'>Имя</label>
            </div>

            <div className='input-field'>
              <input id='middle_name' type='text' className='validate' />
              <label htmlFor='middle_name'>Отчество</label>
            </div>

            <div className='input-field'>
              <input id='gender' type='text' className='validate' />
              <label htmlFor='gender'>Пол</label>
            </div>

            <div className='input-field'>
              <input id='birth_date' type='text' className='validate' />
              <label htmlFor='birth_date'>Дата рождения</label>
            </div>

            <h5 className='page-header'>Паспорт</h5>

            <div className='input-field'>
              <input id='passport' type='text' className='validate' />
              <label htmlFor='passport'>Серия и номер</label>
            </div>

            <div className='input-field'>
              <input id='passport_issued' type='text' className='validate' />
              <label htmlFor='passport_issued'>Кем выдан</label>
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

export default UserData;
