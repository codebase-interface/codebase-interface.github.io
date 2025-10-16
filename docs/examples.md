# Examples

## Documentation Services

- [Codebase Interface](https://github.com/codebase-interface/codebaseinterface){target="_blank"}

??? example "Directory Interface Example"
    Here's the codebase interface directory implementation:

    ```txt
    ├── AGENTS.md                   # Documentation for AI agents that interact with this codebase
    ├── CHANGELOG.md                # Documentation of notable changes
    ├── CODE_OF_CONDUCT.md          # Code of conduct for contributors
    ├── CONTRIBUTING.md             # How to contribute to this codebase
    ├── LANGUAGE.md                 # Ubiquitous language for this codebase
    ├── LICENSE.md                  # License for this codebase
    ├── PULL_REQUEST_TEMPLATE.md    # Template for pull requests
    ├── README.md                   # Overview of this codebase for users
    ├── RUNBOOK.md                  # Operational documentation for operators
    ├── SECURITY.md                 # Security policy for this codebase
    ├── SUPPORT.md                  # Support guidelines for this codebase
    ├── TODO.md                     # List of tasks to be completed
    ├── Taskfile.yml                # Taskfile for managing tasks
    ├── cliff.toml                  # Configuration file for the Cliff tool
    ├── docs                        # Documentation directory        
    │   ├── README.md               # Main documentation landing page       
    │   └──  ...
    ├── mkdocs.yml                  # MkDocs configuration file
    ├── .editorconfig               # Editor configuration file
    ├── .gitattributes              # Git attributes file
    ├── .gitignore                  # Git ignore file
    └── .editorconfig               # Editor configuration file

    ```

## Source Aligned Services

??? example "Directory Interface Example"
    Here's a source aligned directory implementation:

    ```txt
    ├── AGENTS.md                   # Documentation for AI agents that interact with this codebase
    ├── CHANGELOG.md                # Documentation of notable changes
    ├── CODE_OF_CONDUCT.md          # Code of conduct for contributors
    ├── CONTRIBUTING.md             # How to contribute to this codebase
    ├── LANGUAGE.md                 # Ubiquitous language for this codebase
    ├── LICENSE.md                  # License for this codebase
    ├── PULL_REQUEST_TEMPLATE.md    # Template for pull requests
    ├── README.md                   # Overview of this codebase for users
    ├── RUNBOOK.md                  # Operational documentation for operators
    ├── SECURITY.md                 # Security policy for this codebase
    ├── SUPPORT.md                  # Support guidelines for this codebase
    ├── TODO.md                     # List of tasks to be completed
    ├── Taskfile.yml                # Taskfile for managing tasks
    ├── cliff.toml                  # Configuration file for the Cliff tool
    ├── docs                        # Documentation directory        
    │   ├── README.md               # Main documentation landing page       
    │   └──  ...
    ├── design                      # Design directory        
    │   ├── README.md               # Introduction to design
    │   ├── contracts               # Any Open API, AsyncAPI, data contracts etc
    │   └── decisions               # Architectural decision records localised to the service
    ├── behaviour                   # Behaviour directory        
    │   ├── README.md               # Introduction to behaviour
    │   └── ...                     # Behaviour implementation encapsulating business logic
    ├── experiences                 # Experiences directory        
    │   ├── README.md               # Introduction to experiences
    │   └── ...                     # UI implementation for behaviour such as web, app, AI etc
    ├── publication                 # Publication directory
    │   ├── README.md               # Introduction to publication
    │   └── ...                     # Implementation of data publications
    ├── outcomes                    # Outcomes directory
    │   ├── README.md               # Introduction to outcomes
    │   └── ...                     # UI implementation for outcomes such as reports, AI etc
    ├── mkdocs.yml                  # MkDocs configuration file
    ├── .editorconfig               # Editor configuration file
    ├── .gitattributes              # Git attributes file
    ├── .gitignore                  # Git ignore file
    └── .editorconfig               # Editor configuration file

    ```

[← Previous: Tooling](../){ .md-button }
[Next: Welcome →](../){ .md-button .md-button--primary style="float: right;" }
