// Infinite Carousel Effects For Skills and Achievements

function infiniteCarousel(trackSelector, speed = 3) {
    const track = document.querySelector(trackSelector);

    if(!track) return;

    function move(){
        const firstCard = track.firstElementChild;
        const gap = parseFloat(getComputedStyle(track).gap);
        const moveDistance = firstCard.offsetWidth + gap;

        track.style.transition = `transform ${speed}s linear`;
        track.style.transform = `translateX(-${moveDistance}px)`;

        track.addEventListener("transitionend", function handler() {
            track.style.transition = "none";
            track.appendChild(firstCard);
            track.style.transform = "translateX(0)";
            track.removeEventListener("transitionend", handler);

            // To Loop Again
            requestAnimationFrame(move);
        });
    }
        // Calling Function
        move();
}

// Initializing
infiniteCarousel('.skills-grid', 2);
infiniteCarousel('.achievement-cert', 2);