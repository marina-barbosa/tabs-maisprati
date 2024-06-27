function animateStairs() {
  const content = document.getElementById('content');
  const spans = document.querySelectorAll('.stairs span');

  content.classList.add('hidden');

  if (spans.length > 0) {
    let delay = 0; // Começando com nenhum atraso
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('expand');
      }, delay + index * 200); // Aumentando o atraso progressivamente
    });
  }
  setTimeout(() => {
    content.classList.remove('hidden');
  }, 700);
}

function revertAnimation() {
  const spans = document.querySelectorAll('.stairs span');

  if (spans.length > 0) {
    let delay = 0;
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('expand');
      }, delay + index * 200);
    });
  }
}

// function revertAnimation2() {
//   const content = document.getElementById('content');
//   const stairs = document.querySelector('.stairs');

//   if (content && stairs) {
//     setTimeout(() => {
//       stairs.classList.remove('expand');
//     }, 100);

//     setTimeout(() => {
//       // content.classList.remove('hidden');
//     }, 200);
//   }
// }

// function revertAnimation() {
//   const content = document.getElementById('content');
//   const stairs = document.querySelector('.stairs');



//     // Remoção gradual da altura dos spans em efeito de escada
//     const spans = document.querySelectorAll('.stairs span');
//     let delay = 0.1;

//     spans.forEach((span, index) => {
//       setTimeout(() => {
//         span.style.height = '0';
//       }, index * 100 + delay * 1000); // Atraso escalonado
//     });

//     // Remover a classe expand após a animação
//     setTimeout(() => {
//       stairs.classList.remove('expand');
//     }, spans.length * 100 + delay * 1000); // Atraso total para garantir a remoção após a animação

//     // Remover a classe hidden após a animação de altura
//     setTimeout(() => {
//       content.classList.remove('hidden');
//     }, spans.length * 100 + delay * 1000 + 300); // Adicionei 300ms extras para garantir a remoção da classe hidden
//   }
// }


// function animateStairs(completeCallback) {
//   const content = document.getElementById('content');
//   const stairs = document.querySelector('.stairs');

//   if (content && stairs) {
//     // Animação de opacidade e crescimento dos spans
//     content.classList.add('hidden');
//     stairs.classList.add('expand');

//     // Tempo para a animação ocorrer antes da requisição
//     setTimeout(() => {
//       if (completeCallback) completeCallback();
//     }, 500); // Tempo da primeira animação (opacidade e crescimento)
//   } else {
//     if (completeCallback) completeCallback();
//   }
// }

// function revertAnimation() {
//   const content = document.getElementById('content');
//   const stairs = document.querySelector('.stairs');

//   if (content && stairs) {
//     stairs.classList.remove('expand');
//     content.classList.remove('hidden');
//   }
// }