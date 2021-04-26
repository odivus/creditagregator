function getEscKeyClick(
  e: KeyboardEvent,
  setState: (state: boolean) => void
): void {
  const keys = {
    27: () => {
      e.preventDefault();
      setState(false);
    },
  };

  if (keys[e.keyCode]) keys[e.keyCode]();
}

export default getEscKeyClick;