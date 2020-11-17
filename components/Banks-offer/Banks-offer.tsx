import { useEffect } from "react";
import BanksOfferContent from '../Banks-offer-content/Banks-offer-content';
import customDropdown from "../../utilities/custom-dropdown";

function BanksOffer() {
  useEffect(() => {
    customDropdown();
  }, []);

  return (
    <div className='row row_content'>
      <div className='col s12 m12 l12'>
        <div className='dropdown-wrap'>
          <div className='dropdown-wrapper'>
            <div className='dropdown-header flex-centered'>
              <div className='dropdown-header__h'>Предложения банков</div>
              <i className='small material-icons'>arrow_drop_down</i>
            </div>
            <div className='dropdown-custom__content custom-block-shaddow custom-scroll-bar'>
              <ul>
                <li><a href='#raifazen'>Райфайзен Банк Аваль</a></li>
                <li><a href='#citi'>Сити Банк</a></li>
                <li><a href='#rokfeller'>Рокфеллер Банк</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
                <li><a href='#rokfeller'>Пиздато</a></li>
                <li><a href='#rokfeller'>Заебато</a></li>
                <li><a href='#rokfeller'>Охуенно</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      <BanksOfferContent />
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
