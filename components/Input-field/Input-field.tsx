type inputChange = {
  (e: React.FormEvent<EventTarget>): void;
}

type InputFieldProps = {
  id: string;
  maxLength: any;
  name: string;
  value: string;
  disabled: boolean;
  labelText: string;
  inputChange?: inputChange;
};

function InputField(props: InputFieldProps) {
  const { 
    id, 
    maxLength, 
    name, 
    value, 
    disabled, 
    labelText, 
    inputChange 
  } = props;

  return (
    <div className='input-field'>
      <input
        id={id}
        maxLength={maxLength}
        name={name}
        type='text'
        className='validate'
        value={value}
        disabled={disabled}
        onChange={(e) => inputChange(e)}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
}

export default InputField;