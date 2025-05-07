
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
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNavDarkDropdown');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  });

