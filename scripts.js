document.addEventListener("DOMContentLoaded", function () {
    // Dropdown menu functionality
    const menuBtn = document.querySelector(".menu-btn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (menuBtn && dropdownContent) {
        menuBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents immediate closing on mobile taps
            dropdownContent.classList.toggle("show-dropdown");
        });

        document.addEventListener("click", function (event) {
            // Close dropdown if clicking outside of it
            if (!menuBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove("show-dropdown");
            }
        });
    }

    // Fade in sections when scrolled into view
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1; // Fade in
                    entry.target.style.transform = "translateY(0)"; // Move to original position
                    observer.unobserve(entry.target); // Stop observing after fade-in
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the section is visible
        }
    );

    // Observe all sections with the class 'fade-in'
    document.querySelectorAll(".fade-in").forEach((section) => {
        // Set initial styles for fade-in effect
        section.style.opacity = 0; // Start hidden
        section.style.transform = "translateY(20px)"; // Start slightly down
        observer.observe(section); // Start observing
    });
});