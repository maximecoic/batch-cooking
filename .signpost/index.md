---
okf_version: "0.2"
type: Index
title: Repository map
description: "Structural map of this repository: 8 concepts, 5 relationships."
resource: git://e4833c3e4889a28aeaa0e949e45dc0649314d5ad
generated: { by: signpost/v0.2.0, at: "2026-09-13" }
---
# Repository map

<!-- signpost:managed:index -->
Start here. What the shape of this repository says, then a line per page naming what is on it.

### How work is done here

- [How work is done here](./practices.md) — what this repository declares about building, testing, gating, and ownership, and what it does not.

### Most connected

The places a wrong assumption propagates furthest, so the places to read first.

- [Deploy to GitHub Pages deploy](./pipelines/deploy-to-github-pages-deploy.md) — 5 relationships (0 in, 5 out)
- [actions/checkout](./references/github-actions-actions-checkout.md) — 1 relationship (1 in, 0 out)
- [actions/configure-pages](./references/github-actions-actions-configure-pages.md) — 1 relationship (1 in, 0 out)
- [actions/deploy-pages](./references/github-actions-actions-deploy-pages.md) — 1 relationship (1 in, 0 out)
- [actions/setup-node](./references/github-actions-actions-setup-node.md) — 1 relationship (1 in, 0 out)

### Structural findings

What the shape of this repository says. Each line is a result — where one reads "none", that is the finding.

- **Import cycles: none.** No module here imports its way back to itself.
- **Cross-cluster edges: none.** Every relationship here stays inside the group of concepts it belongs to.
- **Disconnected islands: none.** Everything that is linked at all is linked into one body.
- **Unconnected concepts: 2.** Nothing links to or from these: dead code, an unreferenced document, or a gap in extraction. Which of the three it is needs a human.
  - [assets](./modules/assets.md)
  - [scripts](./modules/scripts.md)
- **Merge gates: 1 of 1 CI jobs.** These run on a pull request or on a push to the default branch, so they are the automated checks a change meets. Which of them is *required* is configured on the repository and is not in the tree.
  - [Deploy to GitHub Pages deploy](./pipelines/deploy-to-github-pages-deploy.md)

### Modules

- [assets](./modules/assets.md) — 1 javascript file.
- [scripts](./modules/scripts.md) — 1 javascript file; entrypoint #!.

### Pipelines

- [Deploy to GitHub Pages deploy](./pipelines/deploy-to-github-pages-deploy.md) — CI job deploy in the Deploy to GitHub Pages workflow, 6 steps; runs on a pull request or a default-branch push

### External dependencies

- [actions/checkout](./references/github-actions-actions-checkout.md) — github-actions dependency actions/checkout (v4)
- [actions/configure-pages](./references/github-actions-actions-configure-pages.md) — github-actions dependency actions/configure-pages (v5)
- [actions/deploy-pages](./references/github-actions-actions-deploy-pages.md) — github-actions dependency actions/deploy-pages (v4)
- [actions/setup-node](./references/github-actions-actions-setup-node.md) — github-actions dependency actions/setup-node (v4)
- [actions/upload-pages-artifact](./references/github-actions-actions-upload-pages-artifact.md) — github-actions dependency actions/upload-pages-artifact (v3)
<!-- /signpost:managed:index -->

## Notes

_Anything written here is yours. signpost rewrites only the regions between its managed markers, and never this section._
