// Enhanced JavaScript for Codebase Interface landing page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced features
    initializeAnimations();
    initializeSearchEnhancements();
    initializeAnalytics();
    initializeInteractiveElements();
});

/**
 * Initialize scroll-based animations for better user experience
 */
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.audience-grid, .principles-grid, .benefits-section, .community-section').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Enhanced search functionality with cross-repository capabilities
 */
function initializeSearchEnhancements() {
    const searchInput = document.querySelector('.md-search__input');
    if (!searchInput) return;

    // Add search suggestions for common queries
    const commonQueries = [
        'documentation standards',
        'cli tools',
        'getting started',
        'contributing guidelines',
        'audience interfaces',
        'taskfile',
        'automation'
    ];

    // Enhanced search with repository context
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length > 2) {
            // Track search queries for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'search', {
                    search_term: query,
                    event_category: 'engagement'
                });
            }
        }
    }, 300));
}

/**
 * Initialize analytics tracking for user engagement
 */
function initializeAnalytics() {
    // Track button clicks
    document.querySelectorAll('.md-button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const isExternal = this.href && !this.href.includes(window.location.hostname);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'button',
                    event_label: buttonText,
                    external: isExternal
                });
            }
        });
    });

    // Track documentation navigation
    document.querySelectorAll('a[href*="documentation/"], a[href*="cli-tools/"]').forEach(link => {
        link.addEventListener('click', function() {
            const section = this.href.includes('documentation/') ? 'documentation' : 'cli-tools';
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'navigation', {
                    event_category: 'engagement',
                    event_label: section,
                    page_location: this.href
                });
            }
        });
    });

    // Track scroll depth for engagement measurement
    let maxScroll = 0;
    window.addEventListener('scroll', debounce(function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                    event_category: 'engagement',
                    event_label: `${scrollPercent}%`,
                    value: scrollPercent
                });
            }
        }
    }, 500));
}

/**
 * Initialize interactive elements and enhancements
 */
function initializeInteractiveElements() {
    // Enhanced copy button functionality for code blocks
    document.querySelectorAll('.md-clipboard').forEach(button => {
        button.addEventListener('click', function() {
            // Show success feedback
            const originalText = this.getAttribute('title') || 'Copy to clipboard';
            this.setAttribute('title', 'Copied!');
            
            setTimeout(() => {
                this.setAttribute('title', originalText);
            }, 2000);
        });
    });

    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        // Quick search with '/' key
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
        
        // Escape to close search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
            }
        }
    });

    // Enhanced tab switching for quick start section
    document.querySelectorAll('.tabbed-set input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'tab_switch', {
                    event_category: 'engagement',
                    event_label: this.value || this.id
                });
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utility function to debounce rapid events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize theme switching enhancement
 */
function initializeThemeEnhancements() {
    // Detect system theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme-preferred');
    }

    // Listen for theme changes
    const themeToggle = document.querySelector('[data-md-component="palette"]');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            setTimeout(() => {
                const currentTheme = document.querySelector('[data-md-color-scheme]').getAttribute('data-md-color-scheme');
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'theme_change', {
                        event_category: 'ui',
                        event_label: currentTheme
                    });
                }
            }, 100);
        });
    }
}

// Performance optimization: Only load heavy features on interaction
let enhancementsLoaded = false;

function loadEnhancedFeatures() {
    if (enhancementsLoaded) return;
    
    initializeThemeEnhancements();
    enhancementsLoaded = true;
}

// Load enhanced features on first user interaction
['click', 'scroll', 'keydown'].forEach(event => {
    document.addEventListener(event, loadEnhancedFeatures, { once: true });
});

// Expose utilities for external use
window.CodebaseInterface = {
    trackEvent: function(action, category = 'engagement', label = '') {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    },
    
    debounce: debounce
};