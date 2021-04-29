import Link from 'next/link';

import UserRequests from '../../Interfaces/User-Requests';
import ContentWraper from '../Content-wrapper/Content-wrapper';
import CardsRequests from '../Cards-requests/Cards-requests';

interface Props {
  error: boolean;
  requests: Array<UserRequests>;
  filteredByStatusRequests: void | Array<UserRequests>;
}

function RequestsShowContent(props: Props) {
  const { error, requests, filteredByStatusRequests } = props;
  const length: number = requests.length;

  if (error) {
    return (
      <article className='block-centered'>
        <p>Данные о заявках недоступны. Пожалуйста, попробуйте позже.</p>
      </article>
    );
  }

  if (requests && length === 0) {
    return (
      <article className='block-centered'>
        <p>У вас пока нет заявок. Их можно оформить в разделе <Link href='/request-create'><a>&laquo;Оформить заявку&raquo;</a></Link></p>
      </article>  
    );
  }

  return (
    <ContentWraper 
      props={{requests: filteredByStatusRequests}}
      CardsComponent={CardsRequests}
    />
  );
}

export default RequestsShowContent;