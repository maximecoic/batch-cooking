---
type: Practices
title: How work is done here
description: "What this repository declares about building, testing, gating, and ownership — and what it does not."
resource: git://e4833c3e4889a28aeaa0e949e45dc0649314d5ad
generated: { by: signpost/v0.2.0, at: "2026-09-13" }
---
# How work is done here

Each line is something this repository states, or something it does not. A missing declaration is not a criticism and there is no score here: it is a fact about what an agent can rely on, and the absences are the ones worth reading, because they are what it would otherwise have to guess.
<!-- signpost:managed:practices -->
### Building

- **Not declared.** No build command is declared. An agent asked to build this repository has to infer how, and its first guess is not reviewable.
  - Looked in Makefile targets, package.json scripts, Cargo aliases, CMake targets, Bazel targets.

### Testing

- **Not declared.** No test command is declared. This is the fact an agent most needs before it offers to add a test, because it decides where the test goes and how it is run.
  - Looked in Makefile targets, package.json scripts, Cargo aliases, CMake targets, Bazel targets.
- **Not declared.** No test files were found. Either there are none, or this repository names them in a way signpost does not recognise — the coverage report says which languages were read.
  - Looked in files classified as tests by internal/discover.

### What runs against a change

- 1 job run on a pull request or on a push to the default branch: `deploy`. Which of them is *required* is configured on the repository and is not in the tree.
  - Stated in `.github/workflows/pages.yml` line 19.

### How changes are recorded

- **Not declared.** Commit subjects follow no machine-readable convention — 0 of 2 read match the Conventional Commits shape. A message here is prose, so what a change was for has to be read rather than parsed.
  - Looked in the subject line of every commit read.
- **Not declared.** No tag is reachable from this commit, so there is no released version to refer to and "which version is this" has no answer.
  - Looked in tags reachable from the commit being described.

### Dependencies

- **Not declared.** No dependency manifest was found, so this repository's supply chain is not stated anywhere signpost can read.
  - Looked in `go.mod`, `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`.
- **Not declared.** No automated dependency updates are configured, so a published CVE in a dependency is found by whoever happens to look.
  - Looked in `.github/dependabot.yml`, `.github/dependabot.yaml`, `renovate.json`, `renovate.json5`, `.renovaterc`, `.renovaterc.json`, and 2 other places.

### Ownership and policy

- **Not declared.** No CODEOWNERS rules were found, so nothing states who reviews a change to a given path.
  - Looked in `CODEOWNERS`, `.github/CODEOWNERS`, and `docs/CODEOWNERS`.
- **Not declared.** No licence file was found. Without one, whether the code may be reused at all is unstated.
  - Looked in `LICENSE`, `LICENSE.md`, `LICENSE.txt`, `COPYING`.
- **Not declared.** No security policy was found, so someone who finds a vulnerability has to guess where to send it.
  - Looked in `SECURITY.md`, `.github/SECURITY.md`, and `docs/SECURITY.md`.

### Documentation

- The repository has a README.
  - Stated in `README.md`.
- 5 documentation files in the tree, outside the bundle.

### Observability

- **Not declared.** No observability library is a declared dependency, so a failure in production is diagnosed from whatever the code happens to log.
  - Looked in declared dependencies of every manifest read.

### Instructions for agents

- **Not declared.** No agent instructions were found, so an agent working here has only the code to go on.
  - Looked in `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.github/copilot-instructions.md`.
<!-- /signpost:managed:practices -->

## Notes

_Anything written here is yours. signpost rewrites only the regions between its managed markers, and never this section._
