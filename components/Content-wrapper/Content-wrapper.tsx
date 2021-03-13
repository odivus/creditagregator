import scrollTop from '../../utilities/scroll-top';

function ContentWrapper({ props, CardsComponent }) {
  return (
    <>
      <div className='content-wrap content-wrap_paddings'>
        <div className='content-wrapper'>
          <CardsComponent {...props} />
        </div>
        <a href='#' className='scroll-up' onClick={scrollTop}>
          <i className='small material-icons'>arrow_drop_up</i>
        </a>
      </div>
    </>
  );
}

export default ContentWrapper;
