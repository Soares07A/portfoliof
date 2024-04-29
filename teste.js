const cabecalho = document.querySelector('.cab');

let ultimoScroll = 0;

window.addEventListener('scroll', () => {
  const atualScroll = window.pageOffset;

  if (atualScroll > ultimoScroll) {
    cabecalho.classList.add('fixado');
  } else {
    cabecalho.classList.remove('fixado');
  }

  ultimoScroll = atualScroll;
});