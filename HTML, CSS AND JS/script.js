document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Check for saved theme preference or use OS preference
  const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", function () {
    let theme = "light";
    if (this.checked) {
      document.body.classList.add("dark-mode");
      theme = "dark";
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update active class
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });

  // Update active link on scroll
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // Typing effect
  const texts = ["Full Stack Developer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(erase, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(erase, 50);
    }
  }

  // Start typing effect
  setTimeout(type, 1000);

  // Hamburger menu functionality
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Toggle sidebar
  function toggleSidebar() {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scrolling when menu is open
    if (sidebar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  // Add click event to hamburger menu
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  // Close sidebar when clicking on overlay
  overlay.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Close sidebar when clicking on a nav link (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove("active");
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // Close sidebar when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth > 768) return;

    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menuToggle.classList.remove("active");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Project slider functionality
  const track = document.querySelector(".slider-track");
  const cards = document.querySelectorAll(".project-card");
  const nextBtn = document.querySelector(".slider-btn-right");
  const prevBtn = document.querySelector(".slider-btn-left");

  if (track && cards.length > 0) {
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 24; // width + margin

    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

      // Disable/enable buttons based on position
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= cards.length - 1;
      
      // Add/remove disabled class for styling
      prevBtn.classList.toggle("slider-btn-disabled", prevBtn.disabled);
      nextBtn.classList.toggle("slider-btn-disabled", nextBtn.disabled);
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    // Initialize slider
    updateSlider();

    // Handle window resize
    window.addEventListener("resize", () => {
      const newCardWidth = cards[0].offsetWidth + 24;
      track.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
    });
  }
});