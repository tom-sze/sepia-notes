function scrollSmoothTo(elementId) {
    document.getElementById(elementId).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

// set theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
})();