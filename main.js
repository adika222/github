/* ========================================
   PROJECT NEXUS - MAIN JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       SIDEBAR NAVIGATION
    ======================================== */

    const navLinks = document.querySelectorAll(
        ".sidebar-nav .nav-link"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove active styling from every sidebar link
            navLinks.forEach(function (item) {
                item.classList.remove("active");
                item.removeAttribute("aria-current");
            });

            // Activate only the clicked link
            this.classList.add("active");
            this.setAttribute("aria-current", "page");

        });

    });


    /* ========================================
       LIGHT / DARK THEME TOGGLE
    ======================================== */

    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    if (themeToggle) {

        // Update the button to match the current theme
        function updateThemeButton() {
            const isDark = html.getAttribute("data-theme") === "dark";

            themeToggle.setAttribute("aria-pressed", String(isDark));
            themeToggle.setAttribute(
                "aria-label",
                isDark ? "Switch to light theme" : "Switch to dark theme"
            );

            const icon = themeToggle.querySelector("span");

            if (icon) {
                icon.textContent = isDark ? "☀" : "☾";
            }
        }

        // Apply the opposite theme when clicked
        themeToggle.addEventListener("click", function () {
            const currentTheme = html.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            html.setAttribute("data-theme", newTheme);

            updateThemeButton();
        });

        updateThemeButton();
    }

});