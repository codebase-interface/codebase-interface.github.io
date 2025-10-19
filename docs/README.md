# Welcome

Welcome to the codebase interface initiative!

The codebase interface is a set of principles and practices that allow us to identify and understand all perspectives of interacting with a codebase, including contributors, users, operators, AI agents, and build agents.

By providing specific interfaces for each audience perspective, we can ensure that we help all users of the codebase by providing a great experience with clean and maintainable interfaces for all!

## Guide

- [Principles](./principles.md)
- [Audiences](./audiences.md)
- [Interfaces](./interfaces.md)
- [Benefits](./benefits.md)
- [Examples](./examples.md)
- [Tooling](./tooling.md)

## Overview

Remember your codebase is a product with multiple users. We should treat it as such by providing great experiences for all audiences that interact with it.

## Overview

Remember your codebase is a product with multiple users. We should treat it as such by providing great experiences for all audiences that interact with it.

```mermaid
graph TD
    %% Central Codebase
    CODEBASE[🏗️ Codebase<br/>Product]
    
    %% Interface Files
    README["📖 README.md<br/><small>User Interface</small>"]
    CONTRIBUTING["👥 CONTRIBUTING.md<br/><small>Contributor Interface</small>"]
    RUNBOOK["🔧 RUNBOOK.md<br/><small>Operations Interface</small>"]
    AGENTS["🤖 AGENTS.md<br/><small>AI Interface</small>"]
    BUILD["⚙️ Taskfile<br/><small>Build Interface</small>"]
    
    %% Audience Groups
    USERS["👤 Service Users<br/><small>End Users</small>"]
    CONTRIBUTORS["🧑‍💻 Contributors<br/><small>Developers</small>"]
    OPERATORS["🛠️ Operators<br/><small>DevOps/SRE</small>"]
    AI_AGENTS["🤖 AI Agents<br/><small>Copilot/ChatGPT</small>"]
    BUILD_AGENTS["🚀 Build Agents<br/><small>CI/CD Systems</small>"]
    
    %% Connections: Interfaces to Codebase
    README -.-> CODEBASE
    CONTRIBUTING -.-> CODEBASE
    RUNBOOK -.-> CODEBASE
    AGENTS -.-> CODEBASE
    BUILD -.-> CODEBASE
    
    %% Connections: Audiences to Interfaces
    USERS ==> README
    CONTRIBUTORS ==> CONTRIBUTING
    OPERATORS ==> RUNBOOK
    AI_AGENTS ==> AGENTS
    BUILD_AGENTS ==> BUILD
    
    %% Styling
    classDef codebase fill:#4b9ce2,stroke:#333,stroke-width:3px,color:#fff
    classDef interface fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#1565c0
    classDef audience fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#4a148c
    
    class CODEBASE codebase
    class README,CONTRIBUTING,RUNBOOK,AGENTS,BUILD interface
    class USERS,CONTRIBUTORS,OPERATORS,AI_AGENTS,BUILD_AGENTS audience
```

## Support

If your codebase uses codebase interface principles please support the initiative by starring the [Codebase Interface GitHub repository](https://github.com/codebase-interface/codebaseinterface){target="_blank"} and placing the below markdown in the README of your repo.

### Badges

#### Primary

```md
[![Codebase Interface Principles](https://img.shields.io/badge/Codebase%20Interface-Principles-4b9ce2?style=flat-square&logo=semanticweb&logoColor=white)](https://codebaseinterface.org)

> This repository follows the **Codebase Interface Principles** — for a better experience for everyone who works with it.
```

#### Simple

```md
[![Codebase Interface](https://img.shields.io/badge/Codebase_Interface-Principles-blue?style=flat)](https://codebaseinterface.org)
```

#### Footer

```md
_Follows the [Codebase Interface Principles](https://codebaseinterface.org)._
```
