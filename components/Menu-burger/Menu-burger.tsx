import cx from 'classnames';
import styles from './Menu-burger.module.scss';

function MenuBurger({ setShow }: {setShow: (state: boolean) => void}) {
  const className = cx(styles['menu-burger'], 'small material-icons', 'flex-centered');

  return (
    <i 
      id='menu-burger'
      className={className}
      onClick={() => setShow(true)}
    >
      menu
    </i>
  );
}

export default MenuBurger;
