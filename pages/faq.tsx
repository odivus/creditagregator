import Header from "../components/Header/Header";
import HeadGlobal from "../components/Head-global/Head-global";
import Head from "next/head";

function Faq() {
  return (
    <>
      <HeadGlobal />
      <Head>
        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
        ></script>
        <title>Вопросы и ответы</title>
      </Head>
      <Header />
      <div className='row row_content'>
        <div className='col s12 m12 l12'>
          <article className='faq block-centered'>
            <h5 className='h5-page'>Вопросы и&nbsp;ответы</h5>
            <h6>
              Лишился работы из-за длительного карантина. Могу
              я&nbsp;не&nbsp;платить кредит?
            </h6>
            <p>
              Кредит можно не&nbsp;платить, но&nbsp;за&nbsp;вами приедут люди
              в&nbsp;черном.
            </p>

            <h6>Могу я&nbsp;переоформить кредит на&nbsp;бабушку?</h6>
            <p>
              Да, конечно. Кредит можно переоформить на&nbsp;близких
              и&nbsp;дальних родственников, друзей, коллег и&nbsp;соседей.
              Их&nbsp;разрешение не&nbsp;требуется.
            </p>

            <h6>
              Проценты по&nbsp;кредиту довольно высоки, возможно
              их&nbsp;уменьшить?
            </h6>
            <p>
              В&nbsp;настоящее время процентная ставка зафиксирована
              в&nbsp;связи с&nbsp;высокими рисками, волатильностью,
              турбулентностью и&nbsp;неопределенностью. Однако есть уникальная
              возможность оформить новый кредит на&nbsp;покрытие старого
              кредита.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}

export default Faq;
