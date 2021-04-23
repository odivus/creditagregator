import {useEffect, useState, useRef} from 'react';
import Menu from '../Menu/Menu';
import UserItems from '../User/User-items';
import SideMenu from '../../Interfaces/Side-menu';

import getOutsideClick from '../../utilities/get-outside-click';

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
  
  function handleOutsideClick(e: Event) {
    if (sideMenuDomElement.current) {
      if (getOutsideClick(e.target as HTMLElement, 'side-menu')) {
        setShow(false);
        document.removeEventListener('click', handleOutsideClick, false);
      }
    }
  }

  function escKeyListener(
    e: KeyboardEvent, 
    setShow: (state: boolean) => void
  ): void {
    const keys = {
      27: () => {
        e.preventDefault();
        setShow(false);
        window.removeEventListener('keyup', escKeyListener as () => void, false);
      },
    };

    if (keys[e.keyCode]) keys[e.keyCode]();
  }

  function handleEscKeyListener(e: KeyboardEvent): void {
    escKeyListener(e, setShow);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
    window.addEventListener('keyup', handleEscKeyListener, false);

    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
      window.removeEventListener('keyup', escKeyListener as () => void, false);
    }
  });

  useEffect(() => {
    const offsetHeight = document.documentElement.offsetHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (offsetHeight > scrollHeight) {
      return setPageHeight(offsetHeight + 'px');
    }
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
