# Codebase Interface

This documentation will help you understand how to use the service provided by this codebase.

The codebase interface initiative is a set of principles that aim to promote the ease of use of codebases across languages and frameworks for multiple audiences.

- [Codebase Interface](#codebase-interface)
  - [Badges](#badges)
  - [Docs Navigation](#docs-navigation)
  - [Quick Start for Contributors](#quick-start-for-contributors)

## Badges

[![Codebase Interface Principles](https://img.shields.io/badge/Codebase%20Interface-Principles-4b9ce2?style=flat-square&logo=semanticweb&logoColor=white)](https://codebaseinterface.org)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> This repository follows the **Codebase Interface Principles** — for a better experience for everyone who works with it.

## Docs Navigation

| Link | Description |
|-|-|
| [CONTRIBUTING](CONTRIBUTING.md) | Guidelines for contributing to this service. |
| [LANGUAGE](LANGUAGE.md) | Ubiquitous language used for this codebase and service. |
| [DOCS](docs/README.md) | Extended and online documentation for this service. |
| [RUNBOOK](RUNBOOK.md) | How to support this service in production. |
| [SUPPORT](SUPPORT.md) | Contact support for this service. |
| [CHANGELOG](CHANGELOG.md) | A log of all notable changes made to this service. |
| [TODO](TODO.md) | Outstanding tasks and ideas for this service. |
| [AGENTS](AGENTS.md) | AI agent based documentation to support with AI assisted tasks. |

## Quick Start for Contributors

To set up the development environment and enable automatic changelog generation:

```bash
# Install dependencies
task setup
```

This will install required dependencies (MkDocs, plugins) for local development.

**Note**: The changelog is automatically generated via GitHub Actions when commits are pushed to main. Make sure to follow the [Conventional Commits](https://conventionalcommits.org) specification for proper changelog generation.
