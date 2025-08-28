// Fullscreen menu + Theme toggle
(() => {
  // Theme Toggle
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme_toggle');

  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    html.classList.toggle('theme-light', isLight);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.title = isLight ? 'Switch to dark' : 'Switch to light';
    }
  }

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = html.classList.contains('theme-light') ? 'dark' : 'light';
      applyTheme(nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  }

  // Fullscreen Menu
  const menuToggle = document.getElementById('menu_toggle');
  const fsMenu = document.getElementById('fs_menu');
  const menuClose = document.getElementById('fs_menu_close');
  const menuLinks = document.querySelectorAll('[data-menu-close]');

  function setMenuOpen(open) {
    if (!fsMenu || !menuToggle) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    fsMenu.setAttribute('aria-hidden', String(!open));
    fsMenu.classList.toggle('--open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (menuToggle && fsMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
    });
  }

  if (menuClose) menuClose.addEventListener('click', () => setMenuOpen(false));
  menuLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fsMenu && fsMenu.classList.contains('--open')) setMenuOpen(false);
  });

  // Click outside inner to close (optional UX)
  if (fsMenu) {
    fsMenu.addEventListener('click', (e) => {
      const inner = fsMenu.querySelector('.c-fs-menu__inner');
      if (inner && !inner.contains(e.target)) setMenuOpen(false);
    });
  }
})();

// Theme Toggle
const themeToggle = document.getElementById('theme_toggle');
const html = document.documentElement;

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
}

function applyTheme(theme) {
    const isLight = theme === 'light';
    html.classList.toggle('theme-light', isLight);
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isLight));
        themeToggle.title = isLight ? 'Switch to dark' : 'Switch to light';
    }
}

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isNowLight = !html.classList.contains('theme-light');
        const nextTheme = isNowLight ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });
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