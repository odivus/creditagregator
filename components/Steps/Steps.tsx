import {useState, useEffect} from 'react';
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

function Steps() {
  const titles = ['Оформить заявку', 'Калькулятор', 'Отправка заявки'];
  const [documentTitle, setDocumentTitle] = useState('');

  useEffect(() => {
    setDocumentTitle(document.title);
  }, []);

  function showStepsTitles(titles: Array<string>) {
    const currentTitlesIndex = titles.findIndex(title => {
      return title === documentTitle;
    });

    return titles.map((title, index) => {
      let itemClassName = 'steps__item_next';

      if (title === documentTitle) itemClassName = 'steps__item_current';
      if (index < currentTitlesIndex) itemClassName = 'steps__item_prev';

      return <StepsTitle 
                key={index}
                title={title}
                itemClassName={itemClassName}
              />
    });
  }
  
  return (
    <div className={cx('row', styles.steps)}>
      {showStepsTitles(titles)}
    </div>
  );
}

export default Steps;
