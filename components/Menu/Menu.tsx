import MenuItems from './Menu-items';

import stylesMenuHeader from './Menu.module.scss';
import stylesMenuSide from './Menu-in-side.module.scss';

interface Props {
  isSideMenu: boolean; 
  requestsLength: number;
}

function Menu(props: Props) {
  const { isSideMenu, requestsLength } = props;
  const className = isSideMenu 
                  ? stylesMenuSide.menu
                  : stylesMenuHeader.menu

  return (
    <menu className={className}>
      <MenuItems
        isSideMenu={isSideMenu} 
        requestsLength={requestsLength}
      />
    </menu>
  );
}

export default Menu;
