import Banks from '../Interfaces/Banks';

interface ConvertedBanks {
  'card-content__header': string,
  'card-content__text': number,
}

function convertBanksData (bank: Banks): Array<ConvertedBanks> {
  const objKeys = Object.keys(bank);

  return objKeys.map(key => {
    let header: string;

    if (key === 'rate') header = 'Ставка, %';
    if (key === 'term') header = 'Срок, мес.';
    if (key === 'commission') header = 'Комиссия, %';

    return {
      'card-content__header': header,
      'card-content__text': bank[key],
    }
  });
}

export default convertBanksData;