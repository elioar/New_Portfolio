// Theme Toggle
const themeToggle = document.getElementById('theme_toggle');
const mobileThemeToggle = document.getElementById('mobile_header_theme_toggle');
const menuThemeToggle = document.getElementById('mobile_theme_toggle');
const html = document.documentElement;
const themeButtons = [themeToggle, mobileThemeToggle, menuThemeToggle].filter(Boolean);

// Dark is the default theme; light only when the visitor picked it
function applyTheme(isLight) {
    html.classList.toggle('theme-light', isLight);
    themeButtons.forEach((btn) => {
        btn.setAttribute('aria-pressed', String(isLight));
        btn.title = isLight ? 'Switch to dark' : 'Switch to light';
    });
}

applyTheme(localStorage.getItem('theme') === 'light');

function toggleTheme() {
    const isLight = !html.classList.contains('theme-light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    applyTheme(isLight);
}

themeButtons.forEach((btn) => btn.addEventListener('click', toggleTheme));

// Mobile Menu
const menuToggle = document.getElementById('menu_toggle');
const menuClose = document.getElementById('fs_menu_close');
const fsMenu = document.getElementById('fs_menu');
const menuLinks = document.querySelectorAll('[data-menu-close]');
const navBar = document.querySelector('nav.c-nav');

function toggleMenu(show) {
    menuToggle.setAttribute('aria-expanded', show);
    menuToggle.setAttribute('aria-label', show ? 'Close menu' : 'Open menu');
    if (navBar) navBar.classList.toggle('--menu-open', show);
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

if (menuClose) menuClose.addEventListener('click', () => toggleMenu(false));
window.__closeMenu = () => toggleMenu(false);

menuLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fsMenu.classList.contains('--open')) {
        toggleMenu(false);
    }
});

// "Discuss Project" button inside menu → close menu and open contact form
document.querySelectorAll('#menu_contact, #menu_contact_link').forEach((menuContact) => {
    menuContact.addEventListener('click', () => {
        toggleMenu(false);
        if (typeof window.__openContactMaybeWithCat === 'function') {
            window.__openContactMaybeWithCat();
        } else if (typeof window.__openContact === 'function') {
            window.__openContact();
        } else {
            document.querySelector('#js-overlay').classList.add('--visible');
            document.querySelector('#js-contact').classList.add('--visible');
        }
    });
});