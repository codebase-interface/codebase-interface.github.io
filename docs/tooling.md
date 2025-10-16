# Tooling

Below is a suite of recommended tooling that can help support the principles of the codebase interface initiative.

## Abstractions

Abstractions allow you to provide a consistent outer layer for interacting with your codebase without being concerned with localised language or framework variations.

- [Taskfile](https://taskfile.dev/){target="_blank"} - A simple and easy to use task runner / build tool that aims to be a simpler and more powerful Make alternative. It is written in Go and uses a YAML file to define tasks. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be run from the command line.
- [Makefile](https://www.gnu.org/software/make/){target="_blank"} - A build automation tool that automatically builds executable programs and libraries from source code by reading files called Makefiles which specify how to derive the target program. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be run from the command line.
- [Justfile](https://just.systems/){target="_blank"} - A command runner that allows you to define and run commands in a simple and easy to use way. It is written in Rust and uses a simple syntax to define commands. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be run from the command line.

## IDE Agnostic Files

IDE agnostic files allow you to enforce rules or share configuration without IDE vendor lock-in.

- [`.editorconfig`](https://editorconfig.org/){target="_blank"} - A file format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports the EditorConfig file format.
- [`.env`](https://12factor.net/config){target="_blank"} - A plain text file that contains environment variables for a project. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports environment variables.

### Git

Whilst git is not the only source control methodology out there and can be challenged, these files are git-specific and supported across IDEs so are preferred over using vendor specific files.

- [`.gitignore`](https://git-scm.com/docs/gitignore){target="_blank"} - A plain text file that tells Git which files and directories to ignore in a project. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports Git.
- [`.gitattributes`](https://git-scm.com/docs/gitattributes){target="_blank"} - A plain text file that tells Git how to handle certain files in a project. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports Git.
- [`.gitmessage`](https://git-scm.com/docs/git-commit#_specifying_the_commit_message){target="_blank"} - A plain text file that contains a template for commit messages. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports Git.

## Pre-Commits

- [`.pre-commit-config.yaml`](https://pre-commit.com/){target="_blank"} - A configuration file for the pre-commit framework, which is a tool for managing and maintaining multi-language pre-commit hooks. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports YAML files.

### Docker

- [`.dockerignore`](https://docs.docker.com/engine/reference/builder/#dockerignore-file){target="_blank"} - A plain text file that tells Docker which files and directories to ignore when building an image. It is cross platform and works on Windows, MacOS and Linux. It is also IDE agnostic as it can be used with any text editor or IDE that supports Docker.

[← Previous: Benefits](../){ .md-button }
[Next: Examples →](../examples/){ .md-button .md-button--primary style="float: right;" }

