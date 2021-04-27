import {useEffect} from 'react';

import Button from '../Ui/Button/Button';
import UpdateIcon from './Update-icon';

import cx from 'classnames';
import styles from './Button-update.module.scss';

interface Props {
  updateStatus: boolean;
  setUpdateStatus: (state: boolean) => void;
}

function ButtonUpdate(props: Props) {
  const { updateStatus, setUpdateStatus } = props;
  
  useEffect(() => {
    if (!updateStatus) return;

    const timer = setTimeout(() => {
      setUpdateStatus(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [updateStatus]);

  return (
    <div className={cx(styles['update'])}>
      <Button
        className='btn waves-effect waves-light block-centered btn-custom_submit btn-custom_green'
        type='submit'
        text='Обновить'
      />
      <UpdateIcon updateStatus={updateStatus} />
    </div>
  );
}

export default ButtonUpdate;
