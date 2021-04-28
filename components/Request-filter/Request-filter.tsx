interface Props {
  setRequestFilter: (state: string) => void;
}

function RequestFilter(props: Props) {
  const { setRequestFilter } = props;
  
  function handleChange(e: React.FormEvent<EventTarget>): void {
    const { value } = e.target as HTMLInputElement;
    setRequestFilter(value);
  }

  return (
    <form 
      className='custom-radio'
      onChange={handleChange}>
      <label>
        <input
          className='with-gap'
          name='filter'
          value='all'
          type='radio'
          defaultChecked
        />
        <span>Все</span>
      </label>
      <label>
        <input 
          className='with-gap'
          name='filter' 
          value='allowed' 
          type='radio'
        />
        <span>Одобренные</span>
      </label>
      <label>
        <input 
          className='with-gap'
          name='filter' 
          value='rejected' 
          type='radio'
        />
        <span>Отклоненные</span>
      </label>
    </form>
  );
}

export default RequestFilter;
