import Link from 'next/link';

const userLinksData = {
  '/user-data': 'Персональные данные',
  '/user-contacts': 'Контактная информация',
  '/user-home-address': 'Домашний адрес',
  '/user-work': 'Работа',
}

function UserLinks({ className }) {
  const entries = Object.entries(userLinksData);

  return (
    <ul className={className}>
      {
        entries.map((data, key) => {
          return (
            <li key={key}>
              <Link href={data[0]}>
                <a>{data[1]}</a>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default UserLinks;
