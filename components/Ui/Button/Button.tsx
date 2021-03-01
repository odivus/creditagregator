type type = 'submit' | 'reset' | 'button';

interface Props {
  className: string;
  text: string;
  type: type;
}

function Button(props: Props) {
  const { className, type, text } = props;

  return (
    <button
      className={className}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;