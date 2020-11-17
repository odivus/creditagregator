import Link from 'next/link';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link href="/">
      <a className={`${styles.logo} ${styles.header__logo}`}>Unicredit</a>
    </Link>
  );
}

export default Logo;
