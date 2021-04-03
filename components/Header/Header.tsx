import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import User from '../User/User';

import styles from './Header.module.scss';

interface Props {
  requestsLength: number;
}

function Header(props: Props) {
  const { requestsLength } = props;
  return (
    <header className={styles.header}>
      <Logo />
      <Menu 
        {
          ...{
            requestsLength,
            ...props,
          }
        } 
      />
      <User />
    </header>
  );
}

export default Header;

