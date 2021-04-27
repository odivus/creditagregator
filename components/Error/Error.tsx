function Error({ errorMessage }: {errorMessage: string}) {
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
