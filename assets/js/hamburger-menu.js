// Hamburger Menu Activation
const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const navlinks = document.querySelectorAll(".nav-link");


// Toggle Sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});


// Close Sidebar
navlinks.forEach(link => {

  link.addEventListener("click", () => {

    if(window.innerWidth <= 768){
      sidebar.classList.remove("show");
    }
    
  });

});
