import { useState } from 'react';
import dbConnect from '../utilities/db-connect';
import Users from '../models/Users';
import UserDataProps from '../components/Interfaces/User-data-props';

import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import InputField from '../components/Input-field/Input-field';
import Head from 'next/head';

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

function UserData(props: UserDataProps) {
  const {
    first_name,
    middle_name,
    last_name,
    birthday,
  } = props.users[0].personal;

  const { number, registered_place } = props.users[0].passport;

  const [inputValue, setInputValue] = useState({
    number: number,
    registered_place: registered_place,
  });

  function inputChange(e: React.FormEvent<EventTarget>) {
    const { name, value } = e.target as HTMLInputElement;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  function onSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
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
          <form action='' className='user-data' onSubmit={onSubmit}>
            <InputField
              id='surname'
              maxLength=''
              name=''
              value={last_name}
              disabled={true}
              labelText='Фамилия'
            />
            <InputField
              id='name'
              maxLength=''
              name=''
              value={first_name}
              disabled={true}
              labelText='Имя'
            />
            <InputField
              id='middle_name'
              maxLength=''
              name=''
              value={middle_name}
              disabled={true}
              labelText='Отчество'
            />
            <InputField
              id='birth_date'
              maxLength=''
              name=''
              value={`${birthday.day}. ${birthday.month}. ${birthday.year}`}
              disabled={true}
              labelText='Дата рождения'
            />

            <h5 className='page-header'>Паспорт</h5>
            <InputField
              id='passport'
              maxLength='11'
              name='number'
              value={inputValue.number ? inputValue.number : number}
              disabled={false}
              labelText='Серия и номер'
              inputChange={inputChange}
            />
            <InputField
              id='passport_issued'
              maxLength=''
              name='registered_place'
              value={
                inputValue.registered_place
                  ? inputValue.registered_place
                  : registered_place
              }
              disabled={false}
              labelText='Кем выдан'
              inputChange={inputChange}
            />

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
