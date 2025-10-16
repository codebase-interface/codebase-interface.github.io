# Contributing

This documentation will help you contribute to this codebase.

## Setup

[Install taskfile](https://taskfile.dev/docs/installation) via your preferred method.

```bash
go install github.com/go-task/task/v3/cmd/task@latest
```

Confirm task installation

```bash
task --version
```

## View Tasks

```bash
task --list
```

## Development Setup

Run the setup task to configure your development environment:

```bash
task setup
```

This will:

- Install MkDocs and required plugins
- Configure Git hooks for automatic changelog generation
- Set up pre-commit hooks that follow conventional commits

## Important: Git Hooks

This project uses Git hooks to automatically generate changelog entries from conventional commits. The setup task above configures this automatically, but if you need to set it up manually:

```bash
task setup:hooks
```

Make sure to follow [Conventional Commits](https://conventionalcommits.org) specification in your commit messages for proper changelog generation.
