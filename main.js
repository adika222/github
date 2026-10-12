```javascript
/* ========================================
   PROJECT NEXUS - MAIN.JS
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       SIDEBAR NAVIGATION
    ======================================== */

    const sidebar = document.querySelector(".sidebar-nav");

    if (sidebar) {

        sidebar.addEventListener("click", function (event) {

            const link = event.target.closest(".nav-link");

            // Ignore clicks outside navigation links
            if (!link || !sidebar.contains(link)) {
                return;
            }

            // Stop demo links from navigating away
            event.preventDefault();

            // Remove active state from every sidebar link
            const allLinks = sidebar.querySelectorAll(".nav-link");

            allLinks.forEach(function (item) {
                item.classList.remove("active");
                item.removeAttribute("aria-current");
            });

            // Activate only the clicked link
            link.classList.add("active");
            link.setAttribute("aria-current", "page");

            console.log("Active navigation:", link.textContent.trim());

        });

    }


    /* ========================================
       LIGHT / DARK THEME
    ======================================== */

    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    function applyTheme(theme) {

        html.setAttribute("data-theme", theme);

        if (!themeToggle) return;

        const isDark = theme === "dark";

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light theme" : "Switch to dark theme"
        );

        themeToggle.setAttribute("aria-pressed", String(isDark));

        themeToggle.innerHTML = isDark
            ? '<span aria-hidden="true">☀</span><span>Theme</span>'
            : '<span aria-hidden="true">☾</span><span>Theme</span>';
    }

    let savedTheme = "light";

    try {
        const storedTheme = localStorage.getItem("nexus-theme");

        if (storedTheme === "light" || storedTheme === "dark") {
            savedTheme = storedTheme;
        }
    } catch (error) {
        console.warn("Theme storage is unavailable.");
    }

    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            const currentTheme = html.getAttribute("data-theme");

            const nextTheme =
                currentTheme === "dark" ? "light" : "dark";

            applyTheme(nextTheme);

            try {
                localStorage.setItem("nexus-theme", nextTheme);
            } catch (error) {
                console.warn("Could not save the theme.");
            }

        });
    }

});
```