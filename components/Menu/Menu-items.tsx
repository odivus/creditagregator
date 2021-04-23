import Link from 'next/link';
import useGetDocumentTitle from '../../hooks/use-get-document-title';
import RequestsIndicator from './Requests-indicator';
import menuItemsUrlText from './menu-items-url-text';

import cx from 'classnames';

import stylesMenuHeader from './Menu.module.scss';
import stylesMenuSide from './Menu-in-side.module.scss';

interface menuItemsProps {
  requestsLength: number;
  isSideMenu: boolean;
}

function MenuItems(props: menuItemsProps) {
  const {
    requestsLength,
    isSideMenu,
  } = props;

  const items = Object.entries(menuItemsUrlText);
  const documentTitle = useGetDocumentTitle();
 
  if (!documentTitle) return null;

  return (
    <>
      {
        items.map((menuItemUrl, index) => {
          const menuItemClassName = cx({
            [stylesMenuSide['menu__item']]: isSideMenu,
            [stylesMenuHeader['menu__item']]: !isSideMenu,
          });

          const isActiveClassName = cx({
            'menu__item_active': documentTitle !== menuItemUrl[1],
            'menu__item_noactive': documentTitle === menuItemUrl[1],
          });

          const menuItemIsActive = cx({
            [stylesMenuSide[isActiveClassName]]: isSideMenu,
            [stylesMenuHeader[isActiveClassName]]: !isSideMenu,
            ['flex-centered']: !isSideMenu,
          });

          if (menuItemUrl[0] === '/requests') {
            return (
              <li className={menuItemClassName} key={index}>
                {
                  documentTitle !== menuItemUrl[1]
                  ? <Link href={menuItemUrl[0]}>
                      <a className={menuItemIsActive}>
                        <div>{menuItemUrl[1]}</div> 
                        <RequestsIndicator 
                          isSideMenu={isSideMenu}
                          requestsLength={requestsLength} 
                        />
                      </a>
                    </Link>
                  : <div 
                      className={menuItemIsActive}
                    >
                      <div>{menuItemUrl[1]}</div> 
                      <RequestsIndicator 
                        isSideMenu={isSideMenu}
                        requestsLength={requestsLength} 
                      />
                    </div>
                }
              </li>
            );
          }
          return (
            <li className={menuItemClassName} key={index}>
              {
                documentTitle !== menuItemUrl[1]
                ? <Link href={menuItemUrl[0]}>
                    <a className={menuItemIsActive}>
                      {menuItemUrl[1]}
                    </a>
                  </Link>
                : <span className={menuItemIsActive}>
                    {menuItemUrl[1]}
                  </span>
              }
            </li>
          );
        })
      }
    </>
  );
}

export default MenuItems;