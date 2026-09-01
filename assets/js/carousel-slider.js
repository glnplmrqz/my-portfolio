document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const viewport = carousel.querySelector('.carousel-viewport');
    const track = carousel.querySelector('.carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');

    if (!viewport || !track || !prevBtn || !nextBtn) return;

    const slides = [...track.children];
    if (!slides.length) return;

    let index = 0;

    const getVisibleSlides = () => {
      if (window.innerWidth < 480) return 1;
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const getGap = () => {
      const styles = window.getComputedStyle(track);
      return parseFloat(styles.columnGap || styles.gap || '0');
    };

    const updateCarousel = () => {
      const visibleSlides = getVisibleSlides();
      const gap = getGap();
      const slideWidth = slides[0].getBoundingClientRect().width;
      const maxIndex = Math.max(0, slides.length - visibleSlides);

      carousel.style.setProperty('--visible-slides', visibleSlides);
      index = Math.min(index, maxIndex);

      const offset = index * (slideWidth + gap);
      track.style.transform = `translateX(-${offset}px)`;

      prevBtn.disabled = index === 0;
      nextBtn.disabled = index >= maxIndex;
    };

    prevBtn.addEventListener('click', () => {
      index = Math.max(0, index - 1);
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.max(0, slides.length - visibleSlides);
      index = Math.min(maxIndex, index + 1);
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  });
});