// Typing
let typed = new Typed("#my-dream",{
    strings: ["Web Developer", "Software Developer", "Full Stack Developer"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
})

// Get the hamburger icon and nav-links
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const navLinks = document.getElementById('nav-links');
  
    function toggleMenu() {
      navLinks.classList.toggle('open');
    }
  
    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);
  
    const links = document.querySelectorAll('#nav-links a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
      }
    });
  });