import Link from 'next/link';

import cx from 'classnames';
import styles from './Menu.module.scss';

function Menu({ requestsLength }) {
  return (
    <menu className={styles.menu}>
      <li className={styles.menu__item}>
        <Link href='/request-create'>
          <a className={styles.menu__item_active}>Оформить&nbsp;заявку</a>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link href='/requests'>
          <a className={cx(styles.menu__item_active, 'flex-centered')}>
            <div>Заявки</div> 
            <div className={cx(styles.application, 'flex-centered')}>
              {requestsLength ? requestsLength : 0}
            </div>
          </a>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link href='/faq'>
          <a className={styles.menu__item_active}>Вопросы&nbsp;и&nbsp;ответы</a>
        </Link>
      </li>
    </menu>
  );
}

export default Menu;
