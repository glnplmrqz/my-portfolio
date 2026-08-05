// Add error handling and ensure the page loads even if there's an issue
function redirectToHomepage() {
  try {
    window.location.href = "./pages/home-page.html";
  } catch (error) {
    console.error("Error redirecting to homepage:", error);
    
    // Fallback: try again after a short delay
    setTimeout(() => {
      window.location.href = "./pages/home-page.html";
    }, 500);
  }
}

// Set timeout for redirect
setTimeout(redirectToHomepage, 2000);

// Also redirect on click/touch for better UX
document.addEventListener("click", redirectToHomepage);
document.addEventListener("touchstart", redirectToHomepage);