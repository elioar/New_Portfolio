// Theme Toggle
const themeToggle = document.getElementById('theme_toggle');
const mobileThemeToggle = document.getElementById('mobile_header_theme_toggle');
const html = document.documentElement;
const storedTheme = localStorage.getItem('theme') || 'light';

html.classList.toggle('theme-light', storedTheme === 'light');
themeToggle.setAttribute('aria-pressed', storedTheme === 'dark');
if (mobileThemeToggle) {
    mobileThemeToggle.setAttribute('aria-pressed', storedTheme === 'dark');
}

function toggleTheme() {
    const isDark = html.classList.toggle('theme-light');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    themeToggle.setAttribute('aria-pressed', !isDark);
    if (mobileThemeToggle) {
        mobileThemeToggle.setAttribute('aria-pressed', !isDark);
    }
}

themeToggle.addEventListener('click', toggleTheme);

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
}

// Mobile Menu
const menuToggle = document.getElementById('menu_toggle');
const menuClose = document.getElementById('fs_menu_close');
const fsMenu = document.getElementById('fs_menu');
const menuLinks = document.querySelectorAll('[data-menu-close]');

function toggleMenu(show) {
    menuToggle.setAttribute('aria-expanded', show);
    fsMenu.setAttribute('aria-hidden', !show);
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

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fsMenu.getAttribute('aria-hidden') === 'false') {
        toggleMenu(false);
    }
});