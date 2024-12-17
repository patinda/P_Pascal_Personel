document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const elementsToTranslate = document.querySelectorAll("[data-key]");
    let currentLang = "fr";

    // Charger les traductions
    const loadTranslations = async (lang) => {
        const response = await fetch("assets/js/translations.json");
        const translations = await response.json();

        // Mettre à jour les éléments traduisibles
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-key");
            element.textContent = translations[lang][key];
        });

        document.title = translations[lang]["title"]; // Mise à jour du titre
    };

    // Gestion du clic sur les boutons de langue
    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentLang = button.getAttribute("data-lang");
            loadTranslations(currentLang);
        });
    });

    // Charger la langue par défaut
    loadTranslations(currentLang);
});
