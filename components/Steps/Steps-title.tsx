import cx from 'classnames';
import styles from './Steps.module.scss';

function StepsTitle({ title, itemClassName }) {
  const className = cx({
    center: true,
    [styles['steps__item_content']]: true,
    [styles[itemClassName]]: true,
  });

  return (
    <div className={cx('col', 's4', styles['steps__item'])}>
      <div className={className}>
        {title}
      </div>
    </div>
  );
}

export default StepsTitle;