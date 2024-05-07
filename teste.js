const cabecalho = document.querySelector('.cab');

let ultimoScroll = 0;


document.addEventListener("DOMContentLoaded",event=>{
    window.addEventListener('scroll', () => {
    const atualScroll = window.pageOffset;
    
      if (atualScroll > ultimoScroll) {
        cabecalho.classList.add('fixado');
      } else {
        cabecalho.classList.remove('fixado');
      }
    
      ultimoScroll = atualScroll;
    });
})

const initAnimationScroll = () => {
  const sections = document.querySelectorAll('.js-section')

  const windowHalfSize = window.innerHeight * 0.6

  const animateScroll = () => {
    sections.forEach(item => {
      const sectionTop = item.getBoundingClientRect().top

      const isSectionVisible = (sectionTop - windowHalfSize) < 0

      if (isSectionVisible) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }
  animateScroll()
  window.addEventListener('scroll', animateScroll)
}

initAnimationScroll()
