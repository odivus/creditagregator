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