function Error({ errorMessage }) {
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
