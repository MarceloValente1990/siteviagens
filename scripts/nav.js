window.addEventListener('scroll', () => {
    const logo = document.getElementById('logo');
    const nav = document.querySelector('.nav1');
  
    if (window.scrollY > 50) {
      logo.classList.add('hidden');
      nav.classList.add('shrink');
    } else {
      logo.classList.remove('hidden');
      nav.classList.remove('shrink');
    }
  });