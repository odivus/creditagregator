import CardsRequestSend from '../../components/Cards-request-send/Cards-request-send';
import ContentWrapper from '../../components/Content-wrapper/Content-wrapper';
import BankSelected from '../../components/Bank-selected/Bank-selected';
import TotalGoodsSum from '../../components/Goods-sum/Total-goods-sum';

function RequestSendContent(props) {
  const {
    totalSum,
    selectedBank,
    selected_goods,
  } = props;

  return (
    <>
      <article className='block-centered'>
        <h5 className='page-header-hide'>Отправка заявки</h5>
        <p>
          Отправляемая вами заявка в&nbsp;банк будет рассмотрена
          в&nbsp;автоматическом режиме новейшей системой
          с&nbsp;искусственным ителлектом. Принятие решения системой
          о&nbsp;выдаче кредита займет несколько нано- секунд.
        </p>
        <p>
          Результат рассмотрения заявки придет на&nbsp;адрес вашей
          электронной почты и&nbsp;будет доступен в&nbsp;разделе &laquo;
          <a href='/requests'>Заявки</a>&raquo;.
        </p>
      </article>
      <h5>Выбранный Банк</h5>
      <div className='content-wrap conten-wrap_bank-selected'>
        <div className='content-wrapper content-wrapper_bank-selected'>
          {
            selectedBank 
            ? <BankSelected selectedBank={selectedBank} /> 
            : null 
          }
        </div>
      </div>
      <h5>Выбранный товар</h5>
      <ContentWrapper 
        props={{
          selected_goods
        }}
        CardsComponent={CardsRequestSend}
      />
      {
        selectedBank 
        ? <TotalGoodsSum totalSum={totalSum} />
        : null
      }
    </>
  );
}

export default RequestSendContent;