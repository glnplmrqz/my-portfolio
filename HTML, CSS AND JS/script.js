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

    if (window.pageYOffset >= sectionTop - 150) {
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
  const texts = ["Full Stack Developer", "Web Developer", "Software Engineer"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) return; // Safety check

  function type() {
    if (count === texts.length) {
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      setTimeout(erase, 1500);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    typingElement.textContent = letter;

    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(erase, 50);
    }
  }

  // Start typing effect
  setTimeout(type, 500);
});

// --- Project Slider Functionality ---
document.addEventListener("DOMContentLoaded", function () {
  const sliderTrack = document.querySelector(".slider-track");
  const projectCards = document.querySelectorAll(".project-card");
  const prevBtn = document.querySelector(".slider-btn-left");
  const nextBtn = document.querySelector(".slider-btn-right");

  if (!sliderTrack || !prevBtn || !nextBtn) return; // Safety check

  let currentIndex = 0;
  const totalCards = projectCards.length;

  // Function to get card width including margin
  function getCardWidth() {
    if (!totalCards) return 0;
    
    const cardStyle = window.getComputedStyle(projectCards[0]);
    const cardWidth = projectCards[0].offsetWidth;
    const marginRight = parseInt(cardStyle.marginRight) || 0;
    const marginLeft = parseInt(cardStyle.marginLeft) || 0;
    
    return cardWidth + marginRight + marginLeft;
  }

  function updateSlider() {
    const cardWidth = getCardWidth();
    const offset = currentIndex * cardWidth;
    sliderTrack.style.transform = `translateX(-${offset}px)`;

    // Update button states
    if (totalCards <= 1) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      prevBtn.classList.add("slider-btn-disabled");
      nextBtn.classList.add("slider-btn-disabled");
    } else {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= totalCards - 1;
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
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Add keyboard navigation
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      updateSlider();
    } else if (e.key === "ArrowRight" && currentIndex < totalCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Responsive: recalculate on window resize
  let resizeTimeout;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateSlider, 100);
  });

  updateSlider(); // Initial state
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!menuToggle || !sidebar || !overlay) return; // Safety check

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
    } else {
      document.body.style.overflow = "";
    }
  }

  function closeSidebar() {
    menuToggle.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleSidebar();
  });

  overlay.addEventListener("click", closeSidebar);

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // Close sidebar with Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth > 768) return;
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeSidebar();
    }
  });
});