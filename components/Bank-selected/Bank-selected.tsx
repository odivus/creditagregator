interface Props {
  selectedBank: {
    name: string;
    term:number;
    rate: number;
    commission: number;
  }
}

function BankSelected(props: Props) {
  const { name, term, rate, commission } = props.selectedBank;
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
