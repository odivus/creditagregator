function BankSelected({ selectedBank }) {
  const { name, term, rate, commission } = selectedBank;
  return (
    <ul 
      key={Math.random() + Date.now()}
      className='bank-selected'
    >
      <li>
        <h6>{name}</h6>
      </li>
      <li>
        Кредит сроком на&nbsp;{term}&nbsp;мес.
      </li>
      <li>
        Ставка&nbsp;&mdash; {rate}&nbsp;%
      </li>
      <li>
        Комиссия&nbsp;&mdash; {commission}&nbsp;%
      </li>
    </ul>
  );
}

export default BankSelected;
