document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if(body.classList.contains('bg-light-background')){
            body.classList.remove('bg-light-background', 'text-light-text');
            body.classList.add('bg-dark-background', 'text-dark-text');
        } else {
            body.classList.remove('bg-dark-background', 'text-dark-text');
            body.classList.add('bg-light-background', 'text-light-text');
        }
    });

});