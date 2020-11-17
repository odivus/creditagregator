import Header from "../components/Header/Header";
import HeadGlobal from "../components/Head-global/Head-global";
import RequestSendContent from '../components/Request-send-content/Request-send-content';
import Steps from "../components/Steps/Steps";
import Head from "next/head";

function RequestSend() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <title>Отправка заявки</title>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
      </Head>
      <Header />
      <Steps />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
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
            <h5>Выбранный товар</h5>
          </article>
          <RequestSendContent />
          <div className='footer-back'>
            <i className='material-icons'>chevron_left</i>
            <a className='footer-link' href='/calculator'>
              Вернуться к&nbsp;выбору банков
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestSend;
