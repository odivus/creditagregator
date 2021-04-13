interface InputProps {
  id?: string;
  maxLength?: any;
  name?: string;
  type: string;
  className?: string;
  value: string;
  disabled: boolean;
  labelText: string;
  handler?: (e: React.FormEvent<EventTarget>) => void;
};

function Input(props: InputProps) {
  const {
    id,
    maxLength,
    name,
    type,
    className,
    value,
    disabled,
    labelText,
    handler
  } = props;

  return (
    <div className='input-field custom-input-field'>
      <input
        id={id}
        maxLength={maxLength}
        name={name}
        type={type}
        className={className}
        value={value}
        disabled={disabled}
        onChange={(e) => handler(e)}
      />
      <label htmlFor={id} className='active'>{labelText}</label>
    </div>
  );
}

export default Input;