const translations = {
    en: {
        hello: "Hello world!",
        welcome: "Welcome to our website!"
    },
    sp: {
        hello: "¡Hola Mundo!",
        welcome: "¡Bienvenido a nuestro sitio web!"
    }
};

const selectElement = document.getElementById('i18n-switch');

selectElement.addEventListener('change', (e) => {
    const lang = e.target.value;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLanguage', lang);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    selectElement.value = savedLang;
    selectElement.dispatchEvent(new Event('change'));
});
