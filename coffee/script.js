
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial() {
    if (testimonials.length === 0) return; // Prevent errors if no testimonials exist

    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(-${index * 100}%)`;
    });

    index = (index + 1) % testimonials.length;
}

// Ensure the first testimonial is shown immediately
showTestimonial();
setInterval(showTestimonial, 6000); // Change every 6 seconds

/* Navbar Toggle */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
