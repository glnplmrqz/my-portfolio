// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved theme preference or use OS preference
const currentTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");

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

// Simple typing effect
document.addEventListener("DOMContentLoaded", function () {
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
});

// --- Project Slider Functionality ---
document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector(".slider-track");
  const projectCards = document.querySelectorAll(".project-card");
  const prevBtn = document.querySelector(".slider-btn-left");
  const nextBtn = document.querySelector(".slider-btn-right");

  let currentIndex = 0;

  // Pure card width (without margin)
  function getCardWidth() {
    return projectCards.length ? projectCards[0].offsetWidth : 0;
  }
  // Margin between cards (should match your CSS)
  function getCardMargin() {
    return projectCards.length > 1
      ? parseInt(window.getComputedStyle(projectCards[0]).marginRight)
      : 0;
  }

  function updateSlider() {
    const cardWidth = getCardWidth();
    const cardMargin = getCardMargin();
    // Only add margin for cards before last one
    let offset = currentIndex * (cardWidth + cardMargin);
    // If at last slide, remove margin so card is flush right
    if (currentIndex === projectCards.length - 1) {
      offset = (cardWidth + cardMargin) * (projectCards.length - 1);
      // Subtract margin for last card
      offset -= cardMargin;
    }
    sliderTrack.style.transform = `translateX(-${offset}px)`;

    // Disable buttons if no or only one slide
    if (projectCards.length <= 1) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      prevBtn.classList.add("slider-btn-disabled");
      nextBtn.classList.add("slider-btn-disabled");
    } else {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === projectCards.length - 1;
      prevBtn.classList.toggle("slider-btn-disabled", prevBtn.disabled);
      nextBtn.classList.toggle("slider-btn-disabled", nextBtn.disabled);
    }
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < projectCards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Responsive: recalculate on window resize
  window.addEventListener("resize", updateSlider);

  updateSlider(); // Initial state
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Defensive: force sidebar scrollability
  sidebar.style.overflowY = "auto";
  sidebar.style.maxHeight = "100vh";
  sidebar.style.minHeight = "0";

  function toggleSidebar() {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
      // Optional: Scroll to bottom so dark mode/footer are always visible
      sidebar.scrollTop = sidebar.scrollHeight;
    } else {
      document.body.style.overflow = "";
    }
  }

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  overlay.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

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
});