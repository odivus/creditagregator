export default function customSelect() {
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems);

  let selectItem = document.querySelectorAll('ul.dropdown-content li span');
  let selectWrapper = document.querySelectorAll('.select-wrapper input.select-dropdown');
  let label = document.querySelectorAll('.select-wrapper+label');

  for (let i = 0; i < selectItem.length; i++) {
    selectItem[i].setAttribute('style', 'font-family: Roboto, sans-serif; font-weight: 500; font-size: 16px; color: #000000;');
  }
  for (let i = 0; i < selectWrapper.length; i++) {
    selectWrapper[i].className = 'custom-select custom-select-wrapper';
  }
  for (let i = 0; i < label.length; i++) {
    label[i].setAttribute('style', 'font-size: 14px; color: #5f5f5f;');
  }
}