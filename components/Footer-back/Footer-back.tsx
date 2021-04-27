interface Props {
  href: string;
  text: string;
}

function FooterBack(props: Props) {
  const { href, text } = props;
  
  return (
    <div className='footer-back'>
      <i className='material-icons'>chevron_left</i>
      <a className='footer-link' href={href}>
        {text}
      </a>
    </div>
  );
}

export default FooterBack;