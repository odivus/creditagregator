import {useState, useEffect} from 'react';
import Link from 'next/link';

import RequestsIndicator from './Requests-indicator';

import cx from 'classnames';
import styles from './Menu.module.scss';

interface menuItemsProps {
  menuItemsUrlText: object;
  requestsLength: number;
}

function MenuItems(props: menuItemsProps) {
  const {
    menuItemsUrlText,
    requestsLength,
  } = props;
  
  const items = Object.entries(menuItemsUrlText);

  const [documentTitle, setDocumentTitle] = useState('');

  useEffect(() => {
    setDocumentTitle(document.title);
  }, []);

  if (!documentTitle) return null;

  return (
    <>
      {
        items.map((menuItemUrl, index) => {
          const menuItemClassName = cx({
            'menu__item_active': documentTitle !== menuItemUrl[1],
            'menu__item_noactive': documentTitle === menuItemUrl[1],
          });

          if (menuItemUrl[0] === '/requests') {
            return (
              <li className={styles.menu__item} key={index}>
                {
                  documentTitle !== menuItemUrl[1]
                  ? <Link href={menuItemUrl[0]}>
                      <a className={`${styles[menuItemClassName]} flex-centered`}>
                        <div>{menuItemUrl[1]}</div> 
                        <RequestsIndicator requestsLength={requestsLength} />
                      </a>
                    </Link>
                  : <div 
                      className={`${styles[menuItemClassName]} flex-centered`}
                    >
                      <div>{menuItemUrl[1]}</div> 
                      <RequestsIndicator requestsLength={requestsLength} />  
                    </div>
                }
              </li>
            );
          }
          return (
            <li className={styles.menu__item} key={index}>
              {
                documentTitle !== menuItemUrl[1]
                ? <Link href={menuItemUrl[0]}>
                    <a className={styles[menuItemClassName]}>
                      {menuItemUrl[1]}
                    </a>
                  </Link>
                : <span className={styles[menuItemClassName]}>
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