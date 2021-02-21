import { useState } from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import updateUserData from '../database/db-update-user-data';
import Head from 'next/head';

import UserDataProps from './Interfaces/User-data-props';
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
      user,
    },
  };
}

function UserWork(props: UserDataProps) {
  const { company, position, income } = props.user.work;

  const { _id } = props.user;

  const [inputValue, setInputValue] = useState({
    company: company,
    position: position,
    income: income,
  });

  const updatedData = {
    id: _id,
    work: {
      company: inputValue.company,
      position: inputValue.position,
      income: inputValue.income,
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
        <title>Работа</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Работа</h5>
          <form
            className='user-data'
            onSubmit={(e) => userDataOnSubmit(e, updateUserData, updatedData)}
          >
            <Input
              type='text'
              name='company'
              value={inputValue.company ? inputValue.company : company}
              disabled={false}
              labelText='Место работы'
              handler={(e) => inputChange(e, inputValue, setInputValue)}
            />
            <Input
              type='text'
              name='position'
              value={inputValue.position ? inputValue.position : position}
              disabled={false}
              labelText='Должность'
              handler={(e) => inputChange(e, inputValue, setInputValue)}
            />
            <Input
              type='text'
              name='income'
              value={inputValue.income ? inputValue.income : income}
              disabled={false}
              labelText='Доход, &#8381;/мес.'
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

export default UserWork;
