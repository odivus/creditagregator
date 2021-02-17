export function inputChange(
  e: React.FormEvent<EventTarget>, 
  inputValue: object, 
  setInputValue
) {
  const { name, value } = e.target as HTMLInputElement;

  setInputValue({
    ...inputValue,
    [name]: value,
  });
}

export function userDataOnSubmit(
  e: React.FormEvent<EventTarget>, 
  updateUserData,
  data: object
) {
  e.preventDefault();
  updateUserData(data);
}

export function increase(setQuantity, quantity: number) {
  setQuantity(quantity + 1);
}

export function decrease(setQuantity, quantity: number) {
  const decreaseQuantity = quantity - 1;

  if (decreaseQuantity < 1) {
    setQuantity(1);
  } else {
    setQuantity(decreaseQuantity);
  }
}