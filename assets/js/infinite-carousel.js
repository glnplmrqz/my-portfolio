// Infinite Carousel Effects For Skills and Achievements

function infiniteCarousel(trackSelector, speed) {
    const track = document.querySelector(trackSelector);

    if(!track) return;

    const cards = Array.from(track.children);
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const loopWidth = cards.reduce((width, card) => width + card.offsetWidth, 0)
        + gap * (cards.length - 1);

    cards.forEach((card) => track.appendChild(card.cloneNode(true)));

    track.animate(
        [
            { transform: "translateX(0)" },
            { transform: `translateX(-${loopWidth}px)` }
        ],
        {
            duration: cards.length * speed * 1000,
            iterations: Infinity,
            easing: "linear"
        }
    );
}

// Initializing
infiniteCarousel('.skills-grid', 2);
infiniteCarousel('.achievement-cert', 2);