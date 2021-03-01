type setQuantity = (state: number) => void;

export function inputChange(
  e: React.FormEvent<EventTarget>, 
  inputValue: object, 
  setInputValue: (state: object) => void
) {
  const { name, value } = e.target as HTMLInputElement;

  setInputValue({
    ...inputValue,
    [name]: value,
  });
}

export function userDataOnSubmit(
  e: React.FormEvent<EventTarget>, 
  dbUpdateUserData: (data: object) => void,
  data: object
) {
  e.preventDefault();
  dbUpdateUserData(data);
}

export function increase(setQuantity: setQuantity, quantity: number) {
  setQuantity(quantity + 1);
}

export function decrease(setQuantity: setQuantity, quantity: number) {
  const decreaseQuantity = quantity - 1;

  if (decreaseQuantity < 1) {
    setQuantity(1);
  } else {
    setQuantity(decreaseQuantity);
  }
}