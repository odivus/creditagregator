import Banks from '../../Interfaces/Banks';
import BanksOfferContent from '../Banks-offer-content/Banks-offer-content';

interface Props {
  banks: Array<Banks>;
  parentMonthlyPayment: number;
}

function BanksOffer(props: Props) {
  return (
    <div className='row row_content'>
      <div className='col s12 m12 l12'>
      <h5 className="h5-calculator-page">Предложения банков</h5>
      <BanksOfferContent {...props} />
        <div className='footer-back'>
          <i className='material-icons'>chevron_left</i>
          <a className='footer-link' href='/request-create'>
            Вернуться к&nbsp;выбору товаров
          </a>
        </div>
      </div>
    </div>
  );
}

export default BanksOffer;
