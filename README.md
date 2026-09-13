# 🍽️ Batch Cooking — visionneuse de menus

Petit site statique qui affiche les fichiers Markdown des menus de la semaine,
pensé pour être consulté **sur un téléphone ou une tablette pendant la session de cuisine**.

👉 **[Ouvrir le site](https://maximecoic.github.io/batch-cooking/)**

## Ce que fait le site

- **Sélecteur de semaine** — toutes les semaines présentes dans `menus/` sont listées, la plus récente est ouverte par défaut.
- **4 onglets** : Les plats · Courses · Session · Vérification.
- **Cases à cocher interactives** — les `- [ ]` du Markdown deviennent cochables, et l'état est mémorisé dans le navigateur (pratique pour la liste de courses et le déroulé du dimanche).
- **Bouton « Écran allumé »** — empêche l'écran de s'éteindre les mains dans la farine (API Screen Wake Lock).
- **Tableaux scrollables**, thème clair/sombre automatique, mise en page imprimable.

## Ajouter une semaine

1. Créer `menus/AAAA-MM-JJ/` (date du **lundi** de la semaine) avec
   `01-plats.md`, `02-courses.md`, `03-session.md`, `04-verification.md`.
2. `git add . && git commit && git push`.

Le fichier `menus/index.json` est **régénéré automatiquement** au déploiement
par `scripts/build-index.mjs` — rien à mettre à jour à la main.

## Développement local

```bash
node scripts/build-index.mjs   # génère menus/index.json
python3 -m http.server 8000    # puis http://localhost:8000
```

Un simple ouvrir-le-fichier ne suffit pas : le site charge les `.md` via `fetch`,
il faut donc un serveur HTTP.

## Structure

```
index.html                  page unique
assets/style.css            styles
assets/app.js               routage, rendu Markdown, cases à cocher, wake lock
assets/vendor/              marked (rendu) + DOMPurify (assainissement HTML)
scripts/build-index.mjs     génère menus/index.json
menus/AAAA-MM-JJ/*.md       contenu
```

Les fichiers de travail de l'assistant (`memoire.md`, `AGENTS.md`, `historique.md`,
`.github/agents`, `.github/prompts`, `.github/hooks`) sont volontairement exclus
du dépôt via `.gitignore`.
