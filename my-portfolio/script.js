// script.js

// Add smooth scrolling to all anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the ID from href (e.g. #about -> "about")
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

