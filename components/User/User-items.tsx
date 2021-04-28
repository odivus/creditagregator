import Link from 'next/link';
import useGetDocumentTitle from '../../hooks/use-get-document-title';
import userItemsUrlText from './user-items-url-text';

import cx from 'classnames';
import styles from './User.module.scss';

function UserItems({ isSideMenu }: {isSideMenu: boolean}) {
  const items = Object.entries(userItemsUrlText);
  const documentTitle = useGetDocumentTitle();

  const className = cx({
    [`${styles['dropdown-user-content']} custom-block-shaddow`]: !isSideMenu,
    [styles['side-menu-user-content']]: isSideMenu,
  });
 
  if (!documentTitle) return null;

  return (
    <ul className={className}>
      {
        items.map((menuItemUrl, index) => {
          return (
            <li key={index}>
              {
                documentTitle !== menuItemUrl[1]
                ? <Link href={menuItemUrl[0]}>
                    <a>{menuItemUrl[1]}</a>
                  </Link>
                : <span className={styles.noactive}>
                    {menuItemUrl[1]}
                  </span>
              }
            </li>
          );
        })
      }
    </ul>
  );
}

export default UserItems;
