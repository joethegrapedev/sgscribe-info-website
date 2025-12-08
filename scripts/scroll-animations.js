/**
 * Scroll Animation Handler
 * Uses Intersection Observer API to trigger animations when sections enter viewport
 */

// Configuration for Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -80px 0px' // Start animation 80px before element enters view
};

/**
 * Callback function when elements intersect with viewport
 * @param {IntersectionObserverEntry[]} entries - Array of observed elements
 * @param {IntersectionObserver} observer - The observer instance
 */
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when element enters viewport
            entry.target.classList.add('animate-in');

            // Stop observing this element after animation triggers (performance optimization)
            // Remove this line if you want animations to trigger every time user scrolls to section
            observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(animateOnScroll, observerOptions);

/**
 * Initialize scroll animations when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all sections that should animate on scroll
    const sections = document.querySelectorAll('.value, .protocols, .download, .investment');

    // Add animation class and start observing each section
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
});
