import Link from 'next/link';
import styles from './User.module.scss';

function User() {
  return (
    <div className={styles.user}>
      <div className={styles['dropdown-user']}>
        <a href='#'>Константин
          <i 
            className='small material-icons'>
              arrow_drop_down
          </i>
        </a>
      </div>
      <ul className={`${styles['dropdown-user-content']} custom-block-shaddow`}>
        <li>
          <Link href='/user-data'>
            <a>Персональные данные</a>
          </Link>
        </li>
        <li>
          <Link href='/user-contacts'>
            <a>Контактная информация</a>
          </Link>
        </li>
        <li>
          <Link href='/user-home-address'>
            <a>Домашний адрес</a>
          </Link>
        </li>
        <li>
          <Link href='/user-work'>
            <a>Работа</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default User;
