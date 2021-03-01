import { useState } from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import dbUpdateUserData from '../database/db-update-user-data';
import Head from 'next/head';

import UserDataProps from '../Interfaces/User-data-props';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Input from '../components/Ui/Input/Input';
import Button from '../components/Ui/Button/Button';

import {
  inputChange,
  userDataOnSubmit,
} from '../components/Ui/handlers/handlers';

export async function getServerSideProps() {
  await dbConnect();

  const user = await getUserById('5fec5250f79e186ea110fb6f');

  return {
    props: {
      user
    }
  }
}

function UserData(props: UserDataProps) {
  const {
    first_name,
    middle_name,
    last_name,
    birthday,
  } = props.user.personal;

  const { _id } = props.user;
  const { number, registered_place } = props.user.passport;

  const [inputValue, setInputValue] = useState({
    number: number,
    registered_place: registered_place,
  });

  const updatedData = {
    id: _id,
    passport: {
      number: inputValue.number,
      registered_place: inputValue.registered_place,
    },
  };

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
          <form
            className='user-data'
            onSubmit={(e) => userDataOnSubmit(e, dbUpdateUserData, updatedData)}
          >
            <Input
              type='text'
              value={last_name}
              disabled={true}
              labelText='Фамилия'
            />
            <Input
              type='text'
              value={first_name}
              disabled={true}
              labelText='Имя'
            />
            <Input
              type='text'
              value={middle_name}
              disabled={true}
              labelText='Отчество'
            />
            <Input
              type='text'
              value={`${birthday.day}. ${birthday.month}. ${birthday.year}`}
              disabled={true}
              labelText='Дата рождения'
            />
            <h5 className='page-header'>Паспорт</h5>
            <Input
              type='text'
              maxLength='11'
              name='number'
              value={inputValue.number ? inputValue.number : number}
              disabled={false}
              labelText='Серия и номер'
              handler={(e) => inputChange(e, inputValue, setInputValue)}
            />
            <Input
              type='text'
              name='registered_place'
              value={
                inputValue.registered_place
                  ? inputValue.registered_place
                  : registered_place
              }
              disabled={false}
              labelText='Кем выдан'
              handler={(e) => inputChange(e, inputValue, setInputValue)}
            />
            <Button
              className='btn waves-effect waves-light block-centered btn-custom_submit btn-custom_green'
              type='submit'
              text='Обновить'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default UserData;
