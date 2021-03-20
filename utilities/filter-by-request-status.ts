import UserRequests from '../Interfaces/User-Requests';

function filterByRequestStatus(
  requests: Array<UserRequests>,
  requestFilter: string
): void | Array<UserRequests> {

  if (!requests) return;

  return requests.filter((requestItem) => {
    if (requestFilter === 'rejected') {
      return requestItem.requestStatus === false;
    }

    if (requestFilter === 'allowed') {
      return requestItem.requestStatus === true;
    }

    if (requestFilter === 'all') {
      return requestItem;
    }
  });
}

export default filterByRequestStatus;