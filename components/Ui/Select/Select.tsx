interface Props {
  data: any;
  className: string;
  defaultValue?: string;
  label: string;
  onChange: (e: React.FormEvent<EventTarget>) => void;
}

function Select(props: Props) {
  const { 
    data, 
    className, 
    defaultValue, 
    label, 
    onChange 
  } = props;
  
  return (
    <div className='input-field'>
      <select
        className={className}
        value={defaultValue}
        onChange={(e: React.FormEvent<EventTarget>) => onChange(e)}
      >
        {
          data.map((item: any, index: number) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })
        }
      </select>
      <label>{label}</label>
    </div>
  );
}

export default Select;
