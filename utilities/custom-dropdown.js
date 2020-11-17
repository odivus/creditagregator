export default function customDropdown () {
  const header = document.querySelector('.dropdown-header');
  const content = document.querySelector('.dropdown-custom__content');

  header.onclick = function () {
    const display = content.style.display;

    !display
      ? content.style.display = 'flex'
      : content.style.display = '';
  }
}