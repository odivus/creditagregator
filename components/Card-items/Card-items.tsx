import styles from '../Banks-offer-content/Banks-offer-content.module.scss';

interface Props {
  data: Array<{
    'card-content__header': string,
    'card-content__text': number,
  }>;
}

function CardItems(props: Props) {
  const { data } = props;
  return (
    <>
      {
        data.map((item, index) => {
          const objKeys = Object.keys(item);
          return (
            objKeys.map(key => {
              return (
              <li 
                className={styles[key]} 
                key={Date.now() + Math.random()}
              >
                {data[index][key]}
              </li>
            )
            })
          );
        })
      } 
    </>
  );
}

export default CardItems;
