
const languageBtn = document.getElementById("languageBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

let currentLanguage = "en";

function changeLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;

    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.setAttribute(
        "dir",
        language === "ar" ? "rtl" : "ltr"
    );

    const elements = document.querySelectorAll("[data-en][data-ar]");

    elements.forEach(element => {

        element.textContent = element.getAttribute(
            language === "ar" ? "data-ar" : "data-en"
        );

    });

    languageBtn.textContent = language === "ar" ? "English" : "العربية";

    menuToggle.setAttribute(
        "aria-label",
        language === "ar" ? "فتح القائمة" : "Open menu"
    );

    localStorage.setItem("avcp-language", language);
}

languageBtn.addEventListener("click", () => {

    changeLanguage(currentLanguage === "en" ? "ar" : "en");

});

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

document.addEventListener("click", event => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    }

});

document.getElementById("year").textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem("avcp-language");

changeLanguage(savedLanguage === "ar" ? "ar" : "en");