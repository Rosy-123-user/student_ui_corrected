function openSlideIn(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            const slideInContainer = document.getElementById('slide-in-container');
            slideInContainer.innerHTML = data;
            const slideIn = slideInContainer.querySelector('.slide-in');
            slideIn.style.width = '100%';
            slideInContainer.style.display = 'block';
        })
        .catch(error => console.error('Error loading slide-in content:', error));
}

function closeSlideIn(id) {
    const slideIn = document.getElementById(id);
    if (slideIn) {
        slideIn.style.width = '0';
        setTimeout(() => {
            slideIn.parentElement.style.display = 'none';
            slideIn.remove();
        }, 500); // Remove from DOM after transition
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
