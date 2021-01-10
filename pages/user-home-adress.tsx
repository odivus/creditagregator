import { useState } from 'react';
import dbConnect from '../lib/db-connect';
import getUserById from '../lib/db-get-user-by-id';
import updateUserData from '../lib/db-update-user-data';
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

function UserHomeAdress(props: UserDataProps) {
  const {
    city,
    address_one
  } = props.user.home_address;

  const { _id } = props.user;

  const [inputValue, setInputValue] = useState({
    city: city,
    address_one: address_one,
  });

  const updatedData = {
    id: _id,
    home_address: {
      city: inputValue.city,
      address_one: inputValue.address_one,
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
        <title>Домашний адрес</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='page-header'>Домашний адрес</h5>
          <form
            className='user-data'
            onSubmit={(e) => userDataOnSubmit(e, updateUserData, updatedData)}
          >
            <Input
              type='text'
              name='city'
              value={inputValue.city ? inputValue.city : city}
              disabled={false}
              labelText='Город'
              handler={(e) => inputChange(e, inputValue, setInputValue)}
            />
            <Input
              type='text'
              name='address_one'
              value={
                inputValue.address_one ? inputValue.address_one : address_one
              }
              disabled={false}
              labelText='адрес 1'
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

export default UserHomeAdress;
