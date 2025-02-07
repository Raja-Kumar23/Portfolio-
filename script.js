
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});

