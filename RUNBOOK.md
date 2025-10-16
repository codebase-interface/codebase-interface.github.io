# Runbook

This documentation will help you operate the service provided by this codebase.

## Live Service

- [codebaseinterface.org](https://codebaseinterface.org/)

## Troubleshooting

The codebase interface website is provided through github pages via the organisation level pages setting which is then leveraged through this specific repo called codebase-interface.github.io. This depends on DNS records being set in the namecheap domain provider and also the CNAME being present in the docs folder so that it can be copied across to the gh-pages branch. 

### Checklist

- ✔️ - Github pages enabled at github organisation level.
- ✔️ - Namecheap domain provider contains TXT record from organisation level.
- ✔️ - Namecheap domain provider contains A records for github IP addresses.
- ✔️ - Repo is named {organisation}.github.io.
- ✔️ - Github pages enabled at the repo level.
- ✔️ - CNAME present in mkdocs folder of main branch with contents codebaseinterface.org.
- ✔️ - CNAME present in root of gh-pages branch with contents codebaseinterface.org.
