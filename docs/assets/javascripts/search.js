// Enhanced search functionality for multi-repository documentation

class MultiRepoSearch {
    constructor() {
        this.searchIndex = null;
        this.repositories = [
            {
                name: 'documentation',
                url: 'https://codebase-interface.github.io/documentation/',
                weight: 1.0
            },
            {
                name: 'cli-tools',
                url: 'https://codebase-interface.github.io/cli-tools/',
                weight: 0.9
            }
        ];
        this.initializeSearch();
    }

    async initializeSearch() {
        try {
            await this.loadSearchIndex();
            this.enhanceSearchInterface();
        } catch (error) {
            console.warn('Multi-repo search initialization failed:', error);
            // Fallback to default search
        }
    }

    async loadSearchIndex() {
        // In production, this would load a pre-built search index
        // For now, we enhance the existing search with repository awareness
        const searchWorker = document.querySelector('script[src*="search"]');
        
        if (searchWorker) {
            // Hook into existing search functionality
            this.enhanceExistingSearch();
        }
    }

    enhanceExistingSearch() {
        const searchInput = document.querySelector('.md-search__input');
        const searchResults = document.querySelector('.md-search__output');
        
        if (!searchInput || !searchResults) return;

        // Add repository filter buttons
        this.addRepositoryFilters();
        
        // Enhance search results with repository context
        this.enhanceSearchResults();
    }

    addRepositoryFilters() {
        const searchForm = document.querySelector('.md-search__form');
        if (!searchForm) return;

        const filterContainer = document.createElement('div');
        filterContainer.className = 'search-filters';
        filterContainer.innerHTML = `
            <div class="search-filter-buttons">
                <button class="filter-btn active" data-repo="all">All</button>
                <button class="filter-btn" data-repo="documentation">Docs</button>
                <button class="filter-btn" data-repo="cli-tools">CLI</button>
            </div>
        `;

        searchForm.appendChild(filterContainer);

        // Add filter functionality
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                this.handleFilterClick(e.target);
            }
        });

        // Add CSS for filters
        this.addFilterStyles();
    }

    addFilterStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .search-filters {
                margin-top: 0.5rem;
                padding: 0 1rem;
            }
            
            .search-filter-buttons {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
            }
            
            .filter-btn {
                background: var(--md-default-bg-color);
                border: 1px solid var(--md-default-fg-color--lightest);
                border-radius: 4px;
                padding: 0.25rem 0.75rem;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.2s ease;
                color: var(--md-default-fg-color--light);
            }
            
            .filter-btn:hover {
                background: var(--md-accent-fg-color--transparent);
                border-color: var(--md-accent-fg-color);
            }
            
            .filter-btn.active {
                background: var(--md-accent-fg-color);
                color: var(--md-accent-bg-color);
                border-color: var(--md-accent-fg-color);
            }
            
            .search-result-repo {
                font-size: 0.7rem;
                color: var(--md-default-fg-color--light);
                background: var(--md-code-bg-color);
                padding: 0.125rem 0.375rem;
                border-radius: 3px;
                margin-left: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .search-filter-buttons {
                    justify-content: center;
                }
                
                .filter-btn {
                    flex: 1;
                    text-align: center;
                    min-width: 60px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    handleFilterClick(button) {
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const repo = button.dataset.repo;
        
        // Track filter usage
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search_filter', {
                event_category: 'search',
                event_label: repo
            });
        }

        // Filter existing results or trigger new search
        this.filterResults(repo);
    }

    filterResults(repo) {
        const results = document.querySelectorAll('.md-search__result');
        
        results.forEach(result => {
            if (repo === 'all') {
                result.style.display = '';
            } else {
                const repoTag = result.querySelector('.search-result-repo');
                const resultRepo = repoTag ? repoTag.textContent.toLowerCase() : 'documentation';
                result.style.display = resultRepo.includes(repo) ? '' : 'none';
            }
        });
    }

    enhanceSearchResults() {
        // Monitor for new search results
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE && node.querySelector('.md-search__result')) {
                            this.addRepositoryTags(node);
                        }
                    });
                }
            });
        });

        const searchResults = document.querySelector('.md-search__output');
        if (searchResults) {
            observer.observe(searchResults, { childList: true, subtree: true });
        }
    }

    addRepositoryTags(container) {
        const results = container.querySelectorAll('.md-search__result');
        
        results.forEach(result => {
            if (result.querySelector('.search-result-repo')) return; // Already tagged

            const link = result.querySelector('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            let repoName = 'documentation'; // default

            // Determine repository based on URL patterns
            if (href.includes('cli-tools/') || href.includes('/cli/')) {
                repoName = 'cli-tools';
            }

            // Add repository tag
            const title = result.querySelector('.md-search__result-title');
            if (title) {
                const repoTag = document.createElement('span');
                repoTag.className = 'search-result-repo';
                repoTag.textContent = repoName;
                title.appendChild(repoTag);
            }
        });
    }

    // Method to programmatically search across repositories
    async searchAcrossRepos(query) {
        const results = [];
        
        for (const repo of this.repositories) {
            try {
                // In a full implementation, this would query each repository's search API
                const repoResults = await this.searchRepository(repo, query);
                results.push(...repoResults.map(r => ({ ...r, repository: repo.name })));
            } catch (error) {
                console.warn(`Search failed for ${repo.name}:`, error);
            }
        }
        
        // Sort by relevance and repository weight
        return results.sort((a, b) => {
            const aRepo = this.repositories.find(r => r.name === a.repository);
            const bRepo = this.repositories.find(r => r.name === b.repository);
            const aScore = (a.score || 0) * (aRepo?.weight || 1);
            const bScore = (b.score || 0) * (bRepo?.weight || 1);
            return bScore - aScore;
        });
    }

    async searchRepository(repo, query) {
        // Placeholder for actual repository search implementation
        // This would integrate with each repository's search API
        return [];
    }
}

// Initialize multi-repository search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MultiRepoSearch();
});

// Expose for external use
window.MultiRepoSearch = MultiRepoSearch;