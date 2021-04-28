import cx from 'classnames';
import stylesMenuHeader from './Menu.module.scss';
import stylesMenuSide from './Menu-in-side.module.scss';

interface Props {
  isSideMenu: boolean;
  requestsLength: number;
}

function RequestsIndicator(props: Props) {
  const { isSideMenu, requestsLength } = props;
  const className = cx({
    [stylesMenuSide['requests']]: isSideMenu,
    [stylesMenuHeader['requests']]: !isSideMenu,
    ['flex-centered']: !isSideMenu,
  });
  
  return (
    <div className={className}>
      {requestsLength ? requestsLength : 0}
    </div>
  );
}

export default RequestsIndicator;