document.addEventListener('DOMContentLoaded', () => {
    // 1. Basketball Decoration Hover Effect
    const basketballDecorations = document.querySelectorAll('.basketball-decoration');

    basketballDecorations.forEach(decoration => {
        decoration.addEventListener('mouseover', () => {
            decoration.style.transform = 'scale(1.2) rotate(180deg)';
            decoration.style.transition = 'transform 0.5s ease-out';
        });

        decoration.addEventListener('mouseout', () => {
            decoration.style.transform = 'scale(1) rotate(0deg)';
            decoration.style.transition = 'transform 0.5s ease-out';
        });
    });

    // 2. Info Card Hover Scale Effect (CSS handles this, but including for context if JS was needed)
    // No JS needed here as the animation is handled by CSS transitions on :hover

    // 3. "Scroll to Top" Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) { // Check if the button exists before adding event listeners
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll animation
            });
        });
    }


    // 4. Fade-in Effect for Section Titles on Scroll (Intersection Observer)
    const sectionTitles = document.querySelectorAll('.section-title');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sectionTitles.forEach(title => {
        observer.observe(title);
    });
});