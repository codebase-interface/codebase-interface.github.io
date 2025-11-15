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

    // External repositories metadata for enhanced search
    const externalRepos = {
        docs: {
            name: 'Documentation Hub',
            url: 'https://codebase-interface.github.io/docs',
            searchUrl: 'https://codebase-interface.github.io/docs/search/?q=',
            repoUrl: 'https://github.com/codebase-interface/docs',
            repoSearchUrl: 'https://github.com/codebase-interface/docs/search?q=',
            topics: ['templates', 'guides', 'specifications', 'best-practices', 'architecture', 'frameworks']
        },
        cli: {
            name: 'CLI Tools',
            url: 'https://codebase-interface.github.io/cli',
            searchUrl: 'https://codebase-interface.github.io/cli/search/?q=',
            repoUrl: 'https://github.com/codebase-interface/cli',
            repoSearchUrl: 'https://github.com/codebase-interface/cli/search?q=',
            topics: ['automation', 'validation', 'generation', 'commands', 'installation', 'configuration']
        }
    };

    // Add search suggestions for common queries
    const commonQueries = [
        'documentation standards',
        'cli tools',
        'getting started',
        'contributing guidelines',
        'audience interfaces',
        'taskfile',
        'automation',
        'templates',
        'validation',
        'installation',
        'configuration'
    ];

    // Enhanced search with repository context
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length > 2) {
            // Add external search suggestions
            addExternalSearchSuggestions(query, externalRepos);
            
            // Track search queries for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'search', {
                    search_term: query,
                    event_category: 'engagement'
                });
            }
        }
    }, 300));

    // Add external search button to search results
    addExternalSearchOptions(externalRepos);
}

/**
 * Add external repository search suggestions
 */
function addExternalSearchSuggestions(query, repos) {
    // Look for existing external results container
    let externalContainer = document.querySelector('.external-search-results');
    
    if (!externalContainer) {
        externalContainer = document.createElement('div');
        externalContainer.className = 'external-search-results';
        externalContainer.innerHTML = `
            <div class="external-search-header">
                <h4>🔍 Search External Resources</h4>
                <p>Find more detailed information in our specialized repositories:</p>
            </div>
        `;
        
        const searchOutput = document.querySelector('.md-search__output');
        if (searchOutput) {
            searchOutput.appendChild(externalContainer);
        }
    }

    // Clear existing suggestions
    const existingSuggestions = externalContainer.querySelectorAll('.external-suggestion');
    existingSuggestions.forEach(s => s.remove());

    // Add suggestions for each repo based on query relevance
    Object.entries(repos).forEach(([key, repo]) => {
        const relevantTopics = repo.topics.filter(topic => 
            topic.includes(query) || query.includes(topic)
        );

        if (relevantTopics.length > 0 || query.length > 3) {
            const suggestion = document.createElement('div');
            suggestion.className = 'external-suggestion';
            suggestion.innerHTML = `
                <div class="suggestion-content">
                    <strong>${repo.name}</strong>
                    <p>Search for "${query}" in ${repo.name.toLowerCase()}</p>
                    ${relevantTopics.length > 0 ? `<small>Related: ${relevantTopics.join(', ')}</small>` : ''}
                </div>
                <div class="suggestion-buttons">
                    <a href="${repo.searchUrl}${encodeURIComponent(query)}" 
                       target="_blank" 
                       class="suggestion-link docs-search"
                       onclick="CodebaseInterface.trackEvent('external_search', 'search', '${key}:${query}')">
                       Search Docs →
                    </a>
                    <a href="${repo.repoSearchUrl}${encodeURIComponent(query)}" 
                       target="_blank" 
                       class="suggestion-link repo-search"
                       onclick="CodebaseInterface.trackEvent('repo_search', 'search', '${key}:${query}')">
                       Search Repo →
                    </a>
                </div>
            `;
            
            externalContainer.appendChild(suggestion);
        }
    });
}

/**
 * Add external search options to the search interface
 */
function addExternalSearchOptions(repos) {
    const searchForm = document.querySelector('.md-search__form');
    if (!searchForm) return;

    // Add CSS for external search styling
    if (!document.querySelector('#external-search-styles')) {
        const styles = document.createElement('style');
        styles.id = 'external-search-styles';
        styles.textContent = `
            .external-search-results {
                margin: 1rem 0;
                padding: 1rem;
                background: var(--md-code-bg-color);
                border-radius: 8px;
                border-left: 4px solid var(--ci-primary, #2563eb);
            }
            
            .external-search-header h4 {
                margin: 0 0 0.5rem 0;
                color: var(--ci-primary, #2563eb);
                font-size: 0.9rem;
            }
            
            .external-search-header p {
                margin: 0 0 1rem 0;
                font-size: 0.8rem;
                opacity: 0.8;
            }
            
            .external-suggestion {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem;
                margin: 0.5rem 0;
                background: var(--md-default-bg-color);
                border-radius: 6px;
                border: 1px solid var(--md-default-fg-color--lightest);
                transition: all 0.2s ease;
            }
            
            .external-suggestion:hover {
                transform: translateX(4px);
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            .suggestion-content {
                flex: 1;
            }
            
            .suggestion-content strong {
                color: var(--ci-primary, #2563eb);
                font-size: 0.85rem;
            }
            
            .suggestion-content p {
                margin: 0.25rem 0;
                font-size: 0.8rem;
            }
            
            .suggestion-content small {
                color: var(--md-default-fg-color--light);
                font-size: 0.7rem;
            }
            
            .suggestion-buttons {
                display: flex;
                gap: 0.5rem;
                flex-direction: column;
            }
            
            @media (min-width: 768px) {
                .suggestion-buttons {
                    flex-direction: row;
                }
            }
            
            .suggestion-link {
                background: var(--ci-primary, #2563eb);
                color: white !important;
                padding: 0.4rem 0.8rem;
                border-radius: 4px;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 500;
                transition: background 0.2s ease;
                text-align: center;
                min-width: 100px;
            }
            
            .suggestion-link:hover {
                background: var(--ci-accent, #0ea5e9);
                text-decoration: none;
            }
            
            .suggestion-link.repo-search {
                background: var(--md-default-fg-color--light);
                color: var(--md-default-bg-color) !important;
            }
            
            .suggestion-link.repo-search:hover {
                background: var(--md-default-fg-color);
            }
        `;
        document.head.appendChild(styles);
    }
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