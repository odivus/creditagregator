import Banks from '../Interfaces/Banks';

interface ConvertedBanks {
  'card-content__header': string,
  'card-content__text': number,
}

function convertBanksData (bank: Banks): Array<ConvertedBanks> {
  const entries = Object.entries(bank);
  const filteredEntries = entries.filter(item => {
    return item[0] !== '_id' && item[0] !== 'name';
  });
  
  const filteredBank = Object.fromEntries(filteredEntries);
  const filteredBankKeys = Object.keys(filteredBank);

  return filteredBankKeys.map(key => {
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