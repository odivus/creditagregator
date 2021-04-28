import {useState, useEffect} from 'react';
import showStepsTitles from './show-Steps-Titles';

import cx from 'classnames';
import styles from './Steps.module.scss';

function Steps() {
  const titles = ['Оформить заявку', 'Калькулятор', 'Отправить заявку'];
  const [documentTitle, setDocumentTitle] = useState('');

  useEffect(() => {
    setDocumentTitle(document.title);
  }, []);
  
  return (
    <div className={cx('row', styles.steps)}>
      {showStepsTitles(titles, documentTitle)}
    </div>
  );
}

export default Steps;
