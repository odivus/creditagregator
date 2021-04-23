import {useState} from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuBurger from '../Menu-burger/Menu-burger';
import MenuSide from '../Menu-side/Menu-side';
import User from '../User/User';

import cx from 'classnames';
import styles from './Header.module.scss';
import stylesMenu from '../Menu/Menu.module.scss';

interface Props {
  requestsLength: number;
}

function Header(props: Props) {
  const { requestsLength } = props;
  const [show, setShow] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <Menu 
        isSideMenu={false}
        requestsLength={requestsLength}
      />
      <User />
      <MenuBurger 
        setShow={setShow} 
      />
      <MenuSide 
        show={show}
        setShow={setShow}
        requestsLength={requestsLength}
      />
    </header>
  );
}

export default Header;

