import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Head from 'next/head';

import { useState } from 'react';
import { useButtonActive } from '../hooks/hooks';

import dbConnect from "../utilities/db-connect";
import Users from "../models/Users";

export async function getServerSideProps() {
  await dbConnect();

  try {
    const data = await Users.find({});

    const users = data.map((item) => {
      const user = item.toObject();

      user._id = user._id.toString();

      return user;
    });

    return {
      props: {
        users,
      },
    };
  } catch {
    return null;
  }
}

function UserData(props) {
  const {
    first_name,
    middle_name,
    last_name,
    birthday,
  } = props.users[0].personal;

  const { number, registered_place } = props.users[0].passport;

  const [state, setState] = useState({
    passportNumber: number,
    passportRigisteredPlace: registered_place,
  });

  const [buttonDisabled, setButtonDisabled] = useState('');

  function setButtonClass(value: string): void {
    !value
      ? setButtonDisabled("disabled")
      : setButtonDisabled("");
  }

  return (
    <>
      <HeadGlobal />
      <Head>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
        <title>Персональные данные</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Персональные данные</h5>
          <form action='' className='user-data'>
            <div className='input-field'>
              <input
                id='surname'
                type='text'
                className='validate'
                value={last_name}
                disabled
              />
              <label htmlFor='surname'>Фамилия</label>
            </div>

            <div className='input-field'>
              <input
                id='name'
                type='text'
                className='validate'
                value={first_name}
                disabled
              />
              <label htmlFor='name'>Имя</label>
            </div>

            <div className='input-field'>
              <input
                id='middle_name'
                type='text'
                className='validate'
                value={middle_name}
                disabled
              />
              <label htmlFor='middle_name'>Отчество</label>
            </div>

            <div className='input-field'>
              <input
                id='birth_date'
                type='text'
                className='validate'
                value={`${birthday.day}. ${birthday.month}. ${birthday.year}`}
                disabled
              />
              <label htmlFor='birth_date'>Дата рождения</label>
            </div>

            <h5 className='page-header'>Паспорт</h5>

            <div className='input-field'>
              <input
                id='passport'
                type='text'
                className='validate'
                maxLength={11}
                value={state.passportNumber}
                onChange={(e) => {
                  setState({ ...state, passportNumber: e.target.value });
                  setButtonClass(e.target.value);
                }}
              />
              <label htmlFor='passport'>Серия и номер</label>
            </div>

            <div className='input-field'>
              <input
                id='passport_issued'
                type='text'
                className='validate'
                value={state.passportRigisteredPlace}
                onChange={(e) =>
                  setState({
                    ...state,
                    passportRigisteredPlace: e.target.value,
                  })
                }
              />
              <label htmlFor='passport_issued'>Кем выдан</label>
            </div>

            <button
              className={`btn ${buttonDisabled} waves-effect waves-light block-centered btn-custom_submit btn-custom_green`}
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
