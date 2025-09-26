document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.getElementById('dropdownMenu');

    // Otvaranje/zatvaranje menija
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation(); // sprečava da klik „prođe“ i zatvori odmah meni
        menuButton.classList.toggle('open');
        menu.classList.toggle('show');
    });

    // Zatvaranje menija kada se klikne van njega
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            menu.classList.remove('show');
            menuButton.classList.remove('open');
        }
    });
});

