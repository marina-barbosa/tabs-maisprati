


function toggleTab(clickedElement) {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  clickedElement.classList.add('active');
}




