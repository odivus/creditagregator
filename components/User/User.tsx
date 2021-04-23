import UserItems from './User-items';
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
      <UserItems isSideMenu={false} />
    </div>
  );
}

export default User;
