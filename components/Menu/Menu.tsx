import MenuItems from './Menu-items';
import menuItemsUrlText from './menu-items-url-text';

import cx from 'classnames';
import styles from './Menu.module.scss';

function Menu({ requestsLength }) {
  return (
    <menu className={cx(`${styles.menu} no-user-select`)}>
      <MenuItems 
        menuItemsUrlText={menuItemsUrlText}
        requestsLength={requestsLength}
      />
    </menu>
  );
}

export default Menu;
