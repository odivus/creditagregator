import {useEffect, useState, useRef} from 'react';
import Menu from '../Menu/Menu';
import UserItems from '../User/User-items';
import SideMenu from '../../Interfaces/Side-menu';

import isOutsideClick from '../../utilities/is-outside-click';
import getEscClick from '../../utilities/get-esc-click';

import stylesHeader from '../Header/Header.module.scss';
import styles from './Menu-side.module.scss';
import cx from 'classnames';

function MenuSide(props: SideMenu) {
  const { show, setShow, requestsLength } = props;
  const className = cx({
    [styles['menu-side']]: true,
    [styles['menu-side_show']]: show,
  });

  const sideMenuDomElement = useRef(null);
  const [pageHeight, setPageHeight] = useState('');
  
  function outsideClickListener(e: Event) {
    if (sideMenuDomElement.current) {
      if (isOutsideClick(e.target as HTMLElement, 'side-menu')) {
        setShow(false);
      }
    }
  }

  function escKeyListener(e: KeyboardEvent): void {
    getEscClick(e, setShow);
  }

  useEffect(() => {
    document.addEventListener('click', outsideClickListener, false);
    document.addEventListener('keyup', escKeyListener, false);

    return () => {
      document.removeEventListener('click', outsideClickListener, false);
      document.removeEventListener('keyup', escKeyListener as () => void, false);
    }
  }, []);

  useEffect(() => {
    const scrollHeight = document.documentElement.scrollHeight;
    setPageHeight(scrollHeight + 'px');
  });

  return (
    <div 
      className={className}
      style={{height: pageHeight}} 
      id='side-menu'
      ref={sideMenuDomElement}>
        <header className={cx(stylesHeader.header, stylesHeader['header_side-menu_bg'])}>
          <i 
            className={cx(styles.close, 'small material-icons')}
            onClick={() => setShow(false)}>
              close
          </i>
        </header>
        <Menu 
          isSideMenu={true}
          requestsLength={requestsLength}
        />
        <UserItems isSideMenu={true} />
    </div>
  );
}

export default MenuSide;
