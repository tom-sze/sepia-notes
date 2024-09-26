function scrollSmoothTo(elementId) {
    document.getElementById(elementId).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}