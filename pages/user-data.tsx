import { useState } from 'react';
import dbConnect from '../database/db-connect';
import getUserById from '../database/db-get-user-by-id';
import dbUpdateUserData from '../database/db-update-user-data';
import Head from 'next/head';

import UserDataProps from '../Interfaces/User-data-props';
import Header from '../components/Header/Header';
import HeadGlobal from '../components/Head-global/Head-global';
import Input from '../components/Ui/Input/Input';
import ButtonUpdate from '../components/Button-update/Button-update';

import Error from '../components/Error/Error';
import {userDataUnavailable} from '../components/Error/error-messages';

import {
  inputChange,
  userDataOnSubmit,
} from '../components/Ui/handlers/handlers';

export async function getServerSideProps() {
  await dbConnect();
  const user = await getUserById('5fec5250f79e186ea110fb6f');

 if (!user) return {
    props: {
      error: true,
      requestsLength: 0,
      user: {
        _id: '',
        personal: {
          first_name: '',
          last_name: '',
          middle_name: '',
          birthday: '',
        },
        passport: {
          number: '',
          registered_place: '',
        }
      },
    },
  };

  return {
    props: {
      error: false,
      requestsLength: user.requests.length,
      user,
    },
  };
}

interface Props extends UserDataProps {
  error: boolean;
  requestsLength: number;
}

function UserData(props: Props) {
  const {
    first_name,
    middle_name,
    last_name,
    birthday,
  } = props.user.personal;

  const { _id } = props.user;
  const { number, registered_place } = props.user.passport;
  const { error, requestsLength } = props;

  const [inputValue, setInputValue] = useState({
    number: number,
    registered_place: registered_place,
  });

  const [updateStatus, setUpdateStatus] = useState(false);

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
      <Header requestsLength={requestsLength} />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <h5 className='h5-mobile-top'>Персональные данные</h5>
          {
            error
            ? <Error errorMessage={userDataUnavailable} />
            : <form
              className='user-data'
              onSubmit={(e) => userDataOnSubmit(e, dbUpdateUserData, setUpdateStatus, updatedData)}
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
              <h5 className='h5-user-info-page'>Паспорт</h5>
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
              <ButtonUpdate 
                updateStatus={updateStatus} 
                setUpdateStatus={setUpdateStatus}
              />
            </form>
          }
        </div>
      </div>
    </>
  );
}

export default UserData;
