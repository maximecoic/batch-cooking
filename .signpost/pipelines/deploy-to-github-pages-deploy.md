---
type: Pipeline
title: Deploy to GitHub Pages deploy
description: "CI job deploy in the Deploy to GitHub Pages workflow, 6 steps; runs on a pull request or a default-branch push"
resource: git://e4833c3e4889a28aeaa0e949e45dc0649314d5ad/.github/workflows/pages.yml
tags: [gate]
generated: { by: signpost/v0.2.0, at: "2026-09-13" }
attributes:
  - { name: job, value: deploy }
  - { name: permissions, value: "contents:read, id-token:write, pages:write" }
  - { name: runner, value: ubuntu-latest }
  - { name: runs, value: actions/checkout → actions/setup-node → Générer l'index des menus → actions/configure-pages → actions/upload-pages-artifact → actions/deploy-pages }
  - { name: steps, value: "6" }
  - { name: workflow, value: Deploy to GitHub Pages }
edges:
  - { kind: configures, to: ../references/github-actions-actions-checkout.md, confidence: extracted, source: .github/workflows/pages.yml }
  - { kind: configures, to: ../references/github-actions-actions-configure-pages.md, confidence: extracted, source: .github/workflows/pages.yml }
  - { kind: configures, to: ../references/github-actions-actions-deploy-pages.md, confidence: extracted, source: .github/workflows/pages.yml }
  - { kind: configures, to: ../references/github-actions-actions-setup-node.md, confidence: extracted, source: .github/workflows/pages.yml }
  - { kind: configures, to: ../references/github-actions-actions-upload-pages-artifact.md, confidence: extracted, source: .github/workflows/pages.yml }
---
# Deploy to GitHub Pages deploy

<!-- signpost:managed:summary -->
CI job deploy in the Deploy to GitHub Pages workflow, 6 steps; runs on a pull request or a default-branch push
<!-- /signpost:managed:summary -->

## Structure

<!-- signpost:managed:structure -->
1 file:
- `.github/workflows/pages.yml`

- **Configures**: [actions/checkout](../references/github-actions-actions-checkout.md), [actions/configure-pages](../references/github-actions-actions-configure-pages.md), [actions/deploy-pages](../references/github-actions-actions-deploy-pages.md), [actions/setup-node](../references/github-actions-actions-setup-node.md), [actions/upload-pages-artifact](../references/github-actions-actions-upload-pages-artifact.md)
<!-- /signpost:managed:structure -->

## Notes

_Anything written here is yours. signpost rewrites only the regions between its managed markers, and never this section._
