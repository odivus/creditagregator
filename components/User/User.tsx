import UserLinks from './User-links';
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
      <UserLinks 
         className={`${styles['dropdown-user-content']} custom-block-shaddow`}
      />
    </div>
  );
}

export default User;
