import ContentCard from '../Content-card/Content-card';
import scrollTop from '../../utilities/scroll-top';

function BanksOfferContent({ banks, parentMonthlyPayment }) {
  return (
    <>
      <div className='content-wrap content-wrap_paddings'>
        <div className='content-wrapper'>
          <ContentCard 
            data={banks}
            parentMonthlyPayment={parentMonthlyPayment} 
          />
        </div>
        <a href='#' className='scroll-up' onClick={scrollTop}>
          <i className='small material-icons'>arrow_drop_up</i>
        </a>
      </div>
    </>
  );
}

export default BanksOfferContent;
