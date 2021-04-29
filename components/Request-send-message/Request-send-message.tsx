import Link from 'next/link';

import Error from '../Error/Error';
import {requestNotSend} from '../Error/error-messages';

function RequestSendMessage({ error }: {error: boolean}) {
  if (error) return (
    <Error errorMessage={requestNotSend} />
  );

  return (
    <article className="block-centered">
      <h5 className='h5-mobile-top'>Заявка отправлена в&nbsp;банк</h5>
      <p>
        Подробная информация доступна в&nbsp;разделе&nbsp;
        <Link href='/requests'>
          <a>&laquo;Заявки&raquo;</a>
        </Link>
      </p>
    </article>
  );
}

export default RequestSendMessage;