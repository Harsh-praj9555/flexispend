// Add event listener to navbar toggle button
document.getElementById("navbarSupportedContent").addEventListener("click", function() {
    // Toggle navbar collapse
    this.classList.toggle("show");
});

// Add event listener to hero section button
document.querySelector(".hero-section button").addEventListener("click", function() {
    // Scroll to features section
    document.querySelector(".features-section").scrollIntoView({ behavior: "smooth" });
});

// Add event listener to call to action section button
document.querySelector(".call-to-action-section button").addEventListener("click", function() {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
});