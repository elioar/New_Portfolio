// Logo Home Navigation with Smooth Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.getElementById('logo-home-link');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Smooth scroll to top of page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Optional: Close mobile menu if open
            const mobileMenu = document.getElementById('fs_menu');
            const menuToggle = document.getElementById('menu_toggle');
            
            if (mobileMenu && mobileMenu.classList.contains('--open')) {
                mobileMenu.classList.remove('--open');
                mobileMenu.setAttribute('aria-hidden', 'true');
                
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                }
            }
            
            // Update URL without page reload (optional)
            if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
                // Only update if we're not already on home page
                window.history.pushState({}, '', '/');
            }
        });
        
        // Add keyboard support for accessibility
        logoLink.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // Add subtle hover effects for better UX
    if (logoLink) {
        logoLink.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        logoLink.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
});

// Enhanced smooth scrolling function for better browser compatibility
function smoothScrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (c > 0) {
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Alternative smooth scroll for older browsers
function fallbackScrollToTop() {
    if (!window.CSS || !CSS.supports('scroll-behavior', 'smooth')) {
        smoothScrollToTop();
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
