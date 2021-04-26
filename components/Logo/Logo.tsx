import Link from 'next/link';
import useGetDocumentTitle from '../../hooks/use-get-document-title';

import cx from 'classnames';
import styles from './Logo.module.scss';

function Logo() {
  const title = 'Unicredit — прототип сервиса по подбору кредитов';
  const documentTitle = useGetDocumentTitle();
  const logoClassName = cx({
    [styles.logo]: true,
    [styles['logo_active']]: documentTitle !== title,
  });
  
  return ( 
    documentTitle !== title
      ? <Link href="/">
          <a className={logoClassName}>Unicredit</a>
        </Link>
      : <div className={logoClassName}>Unicredit</div> 
  );
}

export default Logo;
