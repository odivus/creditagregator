import cx from 'classnames';
import styles from './Menu-burger.module.scss';

function MenuBurger() {
  return (
    <i 
      className={cx(styles['menu-burger'], 'small material-icons', 'flex-centered')}
    >
      menu
    </i>
  );
}

export default MenuBurger;
