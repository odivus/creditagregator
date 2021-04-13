function FooterBack({ href, text }) {
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