# Codebase Interface - AI Agent Instructions

This documentation provides AI agents with comprehensive instructions for
understanding and working with this codebase effectively.

## Project Overview

The **Codebase Interface** is a documented set of principles that promote ease
of use of codebases across languages and frameworks. This repository serves as
the **SEO-optimized landing page** hosted at **codebaseinterface.org** that
directs users to:

- **Documentation Hub**:
  [codebaseinterface.org/docs](https://codebaseinterface.org/docs)
- **CLI Tools**:
  [codebaseinterface.org/cli](https://codebaseinterface.org/cli)
- **GitHub Organization**:
  [github.com/codebase-interface](https://github.com/codebase-interface)
- **GitHub Discussions**:
  [github.com/orgs/codebase-interface/discussions](https://github.com/orgs/codebase-interface/discussions)

- Do not assume any other pages exist beyond those listed above.

### Target Audiences

This project serves five distinct audiences:

- **Contributors** - Developers who modify and extend the codebase
- **Consumers** - End users who consume the functionality
- **Operators** - DevOps teams who deploy and maintain the system
- **AI Agents** - Automated systems and tools (you!)
- **Build Agents** - CI/CD and automation systems

## Technology Stack

- **Site Generator**: MkDocs with Material theme
- **Language**: Python 3.12+ for tooling, Markdown for content
- **Hosting**: GitHub Pages with automated deployment
- **Build System**: Taskfile for task automation
- **Styling**: Custom CSS with Material Design theming
- **Search**: Material's built-in search with external repo integration

## Repository Structure

```text
codebase-interface.github.io/
├── 📄 AGENTS.md              # AI agent interface (this file)
├── 📄 README.md              # Consumer interface
├── 📄 CONTRIBUTING.md        # Contributor interface  
├── 📄 RUNBOOK.md             # Operator interface
├── 📄 TODO.md                # Outstanding tasks
├── ⚙️ Taskfile.yml           # Task automation
├── ⚙️ mkdocs.yml            # Site configuration
├── 📁 docs/                  # Source content
│   ├── index.md             # Main landing page
│   ├── about.md             # About page
│   └── assets/              # Styling and scripts
├── 📁 site/                  # Generated static site
├── 📁 .github/              # GitHub Actions and templates
└── 📋 requirements.txt      # Python dependencies
```

## Key Features

- **Landing Page Hub**: Aggregates and directs users to external
  documentation and CLI repos
- **SEO Optimization**: Enhanced metadata and search capabilities
- **External Resource Integration**: Smart linking to documentation sites vs.
  GitHub repositories
- **Enhanced Search**: Cross-repository search functionality
- **Mobile-Responsive**: Material Design with dark/light theme support

## Development Workflow

### Available Tasks (via Taskfile)

```bash
# Essential commands for AI agents
task setup          # Install all dependencies
task serve          # Start development server
task build          # Build site for testing
task build-production # Build optimized for deployment
task validate       # Run linting and build validation
task clean          # Remove build artifacts

# Quality assurance
task lint           # Check markdown formatting
task stats          # Show project statistics
```

### Common Operations

1. **Content Updates**: Modify files in `docs/` directory
2. **Styling Changes**: Update `docs/assets/stylesheets/extra.css`
3. **Functionality**: Modify `docs/assets/javascripts/extra.js`
4. **Configuration**: Update `mkdocs.yml` for site settings
5. **Tasks**: Modify `Taskfile.yml` for automation

## Quality Standards

### Code Quality

- **Markdown Linting**: All `.md` files must pass markdownlint validation
- **Link Validation**: No broken links allowed in documentation
- **Conventional Commits**: Use structured commit messages
- **PR Template**: Follow the pull request template for contributions

### Testing & Validation

```bash
# Validate before committing
task lint           # Check markdown formatting
task validate       # Full validation (lint + build)
task build-production # Test production build
```

### File Standards

- **EditorConfig**: Consistent formatting via `.editorconfig`
- **Git Attributes**: Proper file handling via `.gitattributes`
- **Line Endings**: LF for all text files
- **Encoding**: UTF-8 for all content

## AI Agent Guidelines

### What This Repository IS

- ✅ **Landing page hub** directing users to external documentation and CLI tools
- ✅ **SEO-optimized** entry point for the codebase interface initiative
- ✅ **Integration point** linking multiple repositories and resources
- ✅ **Responsive website** built with MkDocs Material theme

### What This Repository IS NOT

- ❌ **Primary documentation** - that lives in
  [codebase-interface/docs](https://github.com/codebase-interface/docs)
- ❌ **CLI tool source** - that lives in
  [codebase-interface/cli](https://github.com/codebase-interface/cli)
- ❌ **Content-heavy site** - this is a discovery and navigation hub
- ❌ **Backend application** - this is a static site generator

### Making Changes

#### Content Updates (docs/index.md, docs/about.md)

- Focus on **discovery and navigation** to external resources
- Maintain **clear calls-to-action** directing to documentation and CLI
- Update **external links** to point to MkDocs sites, not GitHub repos
- Preserve **SEO optimization** and keyword density

#### Styling Updates (docs/assets/stylesheets/extra.css)

- Follow **Material Design** principles
- Maintain **responsive design** for mobile devices
- Use **CSS custom properties** for consistent theming
- Test both **light and dark** themes

#### Functionality (docs/assets/javascripts/extra.js)

- Enhance **search functionality** with external repo integration
- Track **user interactions** for analytics
- Maintain **performance** and avoid heavy dependencies
- Ensure **accessibility** compliance

#### Configuration (mkdocs.yml)

- Keep **external repo metadata** updated in `extra.external_repos`
- Maintain **proper SEO metadata** and descriptions
- Ensure **all plugins** are properly configured
- Update **navigation** if page structure changes

### Deployment Process

This repository uses **GitHub Actions** for automated deployment:

1. **Trigger**: Push to `main` branch or manual workflow dispatch
2. **Build Process**:
   - Install Python dependencies via `requirements.txt`
   - Install Node.js tools (markdownlint-cli)
   - Run `task validate` (linting + build verification)
   - Execute `task build-production`
   - Add `.nojekyll` file for GitHub Pages
3. **Deploy**: Upload to GitHub Pages via `actions/deploy-pages@v4`

### External Dependencies

#### Documentation Sites

- **Main Site**: `codebaseinterface.org` - landing page and discovery hub
- **Primary Docs**: `codebaseinterface.org/docs` - comprehensive guides and
  templates
- **CLI Docs**: `codebaseinterface.org/cli` - command-line tool documentation
- **Fallback**: GitHub repositories for source code access

#### Internal Dependencies

- **MkDocs Material**: `>=9.0.0` for modern theme features
- **Python**: `3.12+` for build tooling
- **Node.js**: For markdownlint validation
- **GitHub Actions**: For automated CI/CD

### Common Tasks for AI Agents

#### Content Maintenance

```bash
# Update landing page content
vim docs/index.md
task validate  # Test changes

# Update external resource links
vim docs/index.md  # Look for github.com links that should use codebaseinterface.org
task serve  # Preview changes locally
```

#### SEO Optimization

```bash
# Update site metadata
vim mkdocs.yml  # site_description, keywords
vim docs/index.md  # frontmatter keywords, descriptions

# Verify search functionality
task serve  # Test search features
```

#### Link Management

```bash
# Ensure documentation links point to proper domains
grep -r "github.com/codebase-interface/docs" docs/
grep -r "github.com/codebase-interface/cli" docs/
# These should point to codebaseinterface.org subdomains instead

# Validate all links work
task validate  # Includes broken link checking
```

## File Interface Reference

### Critical Files for AI Agents

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `docs/index.md` | Main landing page content | Often |
| `docs/about.md` | About page content | Occasionally |
| `mkdocs.yml` | Site configuration and metadata | Rarely |
| `docs/assets/stylesheets/extra.css` | Custom styling | Occasionally |
| `docs/assets/javascripts/extra.js` | Enhanced functionality | Occasionally |
| `Taskfile.yml` | Development and build tasks | Rarely |
| `requirements.txt` | Python dependencies | Rarely |

### Documentation Standards Files

| File | Purpose | AI Agent Use |
|------|---------|------------|
| `README.md` | Consumer interface | Reference project overview |
| `CONTRIBUTING.md` | Contributor interface | Follow contribution guidelines |
| `RUNBOOK.md` | Operator interface | Understand deployment process |
| `TODO.md` | Task tracking | Check outstanding work |
| `AGENTS.md` | AI agent interface | **You are here!** |

## Best Practices for AI Agents

1. **Always validate** changes with `task validate` before suggesting commits
2. **Maintain external link accuracy** - prefer codebaseinterface.org
   subdomains over GitHub repos for user-facing links
3. **Preserve SEO optimization** - don't remove keywords or metadata without
   replacement
4. **Test responsively** - use `task serve` to preview changes on different
   screen sizes
5. **Follow the Taskfile** - use defined tasks instead of direct tool
   invocation
6. **Update external repo metadata** in `mkdocs.yml` when external
   repositories change
7. **Maintain the hub purpose** - this site directs users elsewhere, it
   doesn't host primary content

## Troubleshooting

### Common Issues

- **Build failures**: Usually dependency or configuration issues → Run
  `task setup`
- **Broken links**: Check external sites are accessible → Update links to
  working alternatives
- **Styling issues**: CSS conflicts or theme updates → Test in both
  light/dark modes
- **Search problems**: JavaScript errors or configuration → Check browser
  console

### Debug Commands

```bash
task setup          # Reinstall all dependencies
task clean && task build  # Clean rebuild
task serve --verbose # Detailed build output
markdownlint --config .markdownlint.yml *.md docs/*.md  # Direct lint check
```
