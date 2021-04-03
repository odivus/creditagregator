import cx from 'classnames';
import styles from './Menu.module.scss';

function RequestsIndicator({ requestsLength }) {
  return (
    <div className={cx(styles.application, 'flex-centered')}>
      {requestsLength ? requestsLength : 0}
    </div>
  );
}

export default RequestsIndicator;