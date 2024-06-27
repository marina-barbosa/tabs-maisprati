

const toggleBackgroundColor = (element) => {

  if (element.textContent.trim() === 'додому') {
    cor = '#779d9f';
  } else if (element.textContent.trim() === 'сторінка 1') {
    // cor = '#746c07';
    cor = '#9a8f09';
  } else if (element.textContent.trim() === 'контакт') {
    cor = '#53702a';
  }

  const root = document.documentElement;
  root.style.setProperty('--dinamic1', cor);
}
