// Theme Toggle
const themeToggle = document.getElementById('theme_toggle');
const mobileThemeToggle = document.getElementById('mobile_header_theme_toggle');
const menuThemeToggle = document.getElementById('mobile_theme_toggle');
const html = document.documentElement;
const storedTheme = localStorage.getItem('theme') || 'light';

html.classList.toggle('theme-light', storedTheme === 'light');

function toggleTheme() {
    const isLight = html.classList.toggle('theme-light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
if (menuThemeToggle) menuThemeToggle.addEventListener('click', toggleTheme);

// Mobile Menu
const menuToggle = document.getElementById('menu_toggle');
const menuClose = document.getElementById('fs_menu_close');
const fsMenu = document.getElementById('fs_menu');
const menuLinks = document.querySelectorAll('[data-menu-close]');

function toggleMenu(show) {
    menuToggle.setAttribute('aria-expanded', show);
    fsMenu.setAttribute('aria-hidden', !show);
    fsMenu.classList.toggle('--open', show);
    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
});

menuClose.addEventListener('click', () => toggleMenu(false));

menuLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fsMenu.classList.contains('--open')) {
        toggleMenu(false);
    }
});

// "Discuss Project" button inside menu → close menu and open contact form
const menuContact = document.getElementById('menu_contact');
if (menuContact) {
    menuContact.addEventListener('click', () => {
        toggleMenu(false);
        document.querySelector('#js-overlay').classList.add('--visible');
        document.querySelector('#js-contact').classList.add('--visible');
    });
}