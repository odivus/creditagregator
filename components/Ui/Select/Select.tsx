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

function Select(props) {
  const { data, className, defaultValue, label, onChange } = props;

  return (
    <div className='input-field'>
      <select
        className={className}
        // defaultValue={defaultValue}
        onChange={(e) => onChange(e)}
      >
        {data.map((item, index) => {
          return (
          <option key={index} value={item}>
            {item}
          </option>
          )
        })}
      </select>
      <label>{label}</label>
    </div>
  );
}

export default Select;
