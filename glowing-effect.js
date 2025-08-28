class GlowingEffect {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            inactiveZone: options.inactiveZone || 0.7,
            proximity: options.proximity || 64,
            spread: options.spread || 20,
            movementDuration: options.movementDuration || 2,
            borderWidth: options.borderWidth || 1
        };
        
        this.lastPosition = { x: 0, y: 0 };
        this.animationFrame = null;
        
        this.init();
    }
    
    init() {
        this.handleMove = this.handleMove.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        
        document.addEventListener('mousemove', this.handleMove);
        window.addEventListener('scroll', this.handleScroll);
        
        // Add initial glow effect
        this.element.classList.add('glowing-card');
    }
    
    handleMove(e) {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        this.animationFrame = requestAnimationFrame(() => {
            const rect = this.element.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            this.lastPosition = { x: mouseX, y: mouseY };
            
            const center = [
                rect.left + rect.width * 0.5,
                rect.top + rect.height * 0.5
            ];
            
            const distanceFromCenter = Math.hypot(
                mouseX - center[0],
                mouseY - center[1]
            );
            
            const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * this.options.inactiveZone;
            
            if (distanceFromCenter < inactiveRadius) {
                this.element.style.setProperty('--glow-opacity', '0');
                return;
            }
            
            const isActive =
                mouseX > rect.left - this.options.proximity &&
                mouseX < rect.left + rect.width + this.options.proximity &&
                mouseY > rect.top - this.options.proximity &&
                mouseY < rect.top + rect.height + this.options.proximity;
            
            this.element.style.setProperty('--glow-opacity', isActive ? '1' : '0');
            
            if (!isActive) return;
            
            const angle = Math.atan2(mouseY - center[1], mouseX - center[0]) * (180 / Math.PI) + 90;
            this.element.style.setProperty('--glow-angle', `${angle}deg`);
        });
    }
    
    handleScroll() {
        this.handleMove({ clientX: this.lastPosition.x, clientY: this.lastPosition.y });
    }
    
    destroy() {
        document.removeEventListener('mousemove', this.handleMove);
        window.removeEventListener('scroll', this.handleScroll);
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
}

// Theme management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.toggleButton = document.getElementById('theme-toggle');
        
        this.init();
    }
    
    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // Add event listener
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
    }
    
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    new ThemeManager();
    
    // Initialize glowing effects
    const cards = document.querySelectorAll('.glowing-card');
    cards.forEach(card => {
        new GlowingEffect(card, {
            inactiveZone: 0.01,
            proximity: 64,
            spread: 40,
            borderWidth: 3
        });
    });
});
