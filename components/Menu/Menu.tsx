import Link from 'next/link';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <menu className={styles.menu}>
      <li className={styles.menu__item}>
        <Link href='/request-create'>
          <a className={styles.menu__item_active}>Оформить&nbsp;заявку</a>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link href='/requests'>
          <a className={styles.menu__item_active}>
            Заявки <span className={styles.application}>99</span>
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
