import cx from 'classnames';
import styles from './Menu-burger.module.scss';

function MenuBurger({ setShow }) {
  return (
    <i 
      id='menu-burger'
      className={cx(styles['menu-burger'], 'small material-icons', 'flex-centered')}
      onClick={() => setShow(true)}
    >
      menu
    </i>
  );
}

export default MenuBurger;
