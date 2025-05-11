window.addEventListener('scroll', () => {
  const logo = document.getElementById('logo');
  const nav = document.querySelector('.nav1');

  const threshold = 55;
  const margin = 54;

  if (window.scrollY > threshold + margin) {
    logo.classList.add('hidden');
    nav.classList.add('shrink');
  } else if (window.scrollY < threshold - margin) {
    logo.classList.remove('hidden');
    nav.classList.remove('shrink');
  }
});