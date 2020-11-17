import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import User from '../User/User';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
      <User />
    </header>
  );
}

export default Header;

