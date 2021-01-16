interface SelectProps {
  data: {
    id: string;
    value: string;
    name: string;
  }[];
  className: string;
  defaultValue?: string;
  label: string;
}

function Select(props: SelectProps) {
  const { 
    data, 
    className,
    defaultValue,
    label 
  } = props;

  return (
    <div className='input-field'>
      <select className={className} defaultValue={defaultValue}>
        {data.map((item) => (
          <option
            key={item.id} 
            value={item.value} 
          >
            {item.name}
          </option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}

export default Select;
