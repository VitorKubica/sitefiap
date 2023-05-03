window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      document.querySelector('.cabecalho').classList.add('reduzido');
    } else {
      document.querySelector('.cabecalho').classList.remove('reduzido');
    }
  });
  