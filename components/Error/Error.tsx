interface Props {
  errorMessage: string;
}

function Error(props: Props) {
  const { errorMessage } = props;
  if (!errorMessage) return (
    null
  );

  return (
    <article className="block-centered">
      <p>{errorMessage}</p>
    </article>
  );
}

export default Error;
