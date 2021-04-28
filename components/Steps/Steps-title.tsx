import cx from 'classnames';
import styles from './Steps.module.scss';

interface Props {
  title: string;
  itemClassName: string;
}

function StepsTitle(props: Props) {
  const { title, itemClassName } = props;
  const parentClassName = cx('col', 's4', styles['steps__item']);
  const childClassName = cx({
    center: true,
    [styles['steps__item_content']]: true,
    [styles[itemClassName]]: true,
  });

  return (
    <div className={parentClassName}>
      <div className={childClassName}>
        {title}
      </div>
    </div>
  );
}

export default StepsTitle;