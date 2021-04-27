import { useState, useEffect } from 'react';

import Lottie from 'react-lottie';
import updateAnimation from './update-animation.json';

import cx from 'classnames';
import styles from './Button-update.module.scss';

interface Props {
  updateStatus: boolean;
}

function UpdateIcon(props: Props) {
  const { updateStatus } = props;
  const className = cx({
    [styles['update__icon']]: true,
    [styles['update__icon_visibility_show']]: updateStatus,
    [styles['update__icon_visibility_hide']]: !updateStatus,
  });

  const defaultOptions = {
    loop: 1,
    autoplay: true,
    animationData: updateAnimation,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    if (!updateStatus) setIsStopped(true);
    if (updateStatus) setIsStopped(false);
  }, [updateStatus]);

  return (
    <div className={className}>
      <Lottie 
        options={defaultOptions}
        isStopped={isStopped}
        width={46}
        height={46}
      />
    </div>
  );
}

export default UpdateIcon;
