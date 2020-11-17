import cx from 'classnames';
import styles from './Steps.module.scss';

function Steps() {
  return (
    <div className={cx('row', styles.steps)}>
      <div className={cx('col', 's4', styles['steps__item'])}>
        <div
          className={cx(
            'center',
            styles['steps__item_content'],
            styles['steps__item_current']
          )}
        >
          Выбор товара
        </div>
      </div>
      <div className={cx('col', 's4', styles['steps__item'])}>
        <div
          className={cx(
            'center',
            styles['steps__item_content'],
            styles['steps__item_next']
          )}
        >
          Калькулятор
        </div>
      </div>
      <div className={cx('col', 's4', styles['steps__item'])}>
        <div
          className={cx(
            'center',
            styles['steps__item_content'],
            styles['steps__item_next']
          )}
        >
          Отправка заявки
        </div>
      </div>
    </div>
  );
}

export default Steps;
