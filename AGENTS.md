# Codebase Interface

## Product

The codebase interface is a documented set of principles that aim to promote the ease of use of codebases across languages and frameworks.
The codebase interface is promoting the understanding of the different audiences that need to need to be catered for in the codebase and the different interfaces they need:

- Contributors
- Users
- Operators
- AI Agents
- Build Agents

## Features

- Documentation for the codebase interface principles is supplied for the community and hosted on codebaseinterface.org.

## Technical Requirements

- Taskfile is used to provide a consistent tooling interface for all audiences of this codebase.
- Technical agnostic helper files are utilised such as .editorconfig and .gitattributes.
- An interface is provided for contributors to understand how to contribute to the codebase via the CONTRIBUTING.md file.
- An interface is provided for users to understand how to use the codebase via the README.md.
- An interface is provided for operators to understand how to operate the codebase via the RUNBOOK.md file.
- An interface is provided for AI agents to understand how to interact with the codebase via the AGENTS.md file.
- Markdown linting should be applied to all markdown files.
- Broken links should be prevented in all markdown files.
- Conventional commits should be used for all commit messages.
- A pull request template should be used for all pull requests.
