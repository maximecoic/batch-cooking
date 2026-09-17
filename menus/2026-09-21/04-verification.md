# ✅ Rapport de vérification — semaine du 21 septembre 2026

Premier menu généré avec le setup refondu du 17/09 : **2 adultes**, **règle des 3 socles**, **plan de session en étapes autonomes**, **zéro renvoi**.

| Workflow | 1er passage | Après correction |
|---|---|---|
| 🥗 **Vérif Régime** | ⚠️ À CORRIGER — 1 🔴, 4 🟠 | ✅ Toutes corrigées |
| 🛒 **Vérif Courses** | ⛔ agent indisponible (502 × 3) → audit mené par sous-agent en lecture seule | ✅ COHÉRENT — aucun 🔴, aucun 🟠 |

---

## 🥗 Vérif Régime

### ⭐ C7 — La règle des 3 socles : validée

C'est le contrôle qui justifiait toute la révision. Verdict de l'agent : **3 / 3 socles valides**.

| Socle | Dîners servis | Réellement réutilisé ? |
|---|---|---|
| 🍗 Poulet rôti nature — 1,2 kg, **1 seule cuisson** | Mercredi · Jeudi | ✅ L'étape 14 répartit 420 g + 420 g, recoupés au gramme près avec les deux recettes |
| 🫘 Lentilles vertes — 350 g sec, **1 seule casserole** | Mardi · Vendredi | ✅ L'étape 12 répartit 475 g + 400 g, réinjectés à l'étape 24 |
| 🥕 Légumes racines — **1 seule fournée** | Lundi · Mercredi · Jeudi · Vendredi | ✅ L'étape 11 répartit en 4 boîtes |

Points explicitement validés :
- **Aucun velouté compté** — les 3 socles tiennent sans béquille. C'était le biais de la semaine 1.
- **Poulet mercredi + jeudi n'est pas signalé comme une répétition** — la nouvelle règle fonctionne : l'anti-répétition ne porte que sur le plat fini.
- **Lundi et mardi = poissons indépendants**, non signalés : conforme au plafond réaliste de 2 dîners non mutualisables.

### C3 — Retrait du bébé : vérifié

Recherche exhaustive de `bébé`, `prélèvement`, `avant salage`, colonne à 3 convives sur tout le dossier → **0 occurrence**. Le poulet est salé normalement, les lentilles en fin de cuisson pour une raison technique et non de prélèvement.

### Anomalies corrigées

| Gravité | Constat | Correction appliquée |
|---|---|---|
| 🔴 | **L'étape 15 demandait « les 80 g d'oignon rouge mis de côté à l'étape 11 » — mais l'étape 11 ne prévoyait aucune part jeudi.** Le dîner de jeudi tombait à 290 g de légumes/adulte, sous le plancher de 300 g. | 4ᵉ ligne ajoutée au tableau de l'étape 11, avec la mention que ces 80 g sont obligatoires. La note est reprise dans `01-plats.md`. |
| 🟠 | **5 renvois pointaient vers de faux numéros d'étapes** (décalage de numérotation) : é3→12 au lieu de 11, é7→16 au lieu de 15, é8→20 au lieu de 24, é9→22 au lieu de 25, é10/é11→22 au lieu de 27. | Tous renumérotés **et** nommés (« étape 24 — Dhal »), pour qu'un futur décalage reste lisible. |
| 🟠 | **La vue d'ensemble était désynchronisée des étapes réelles** : 8 étapes placées sur la mauvaise piste (É7 FOUR affichée en Feux 3-4, É17 FOUR en Feux 3-4, É21 FEU 1 en Feu 2…). Le tableau induisait en erreur sur l'occupation des feux. | Grille régénérée à partir des badges de piste réels des 27 étapes. |
| 🟠 | **Surplus de lentilles non tracé** : 360 g annoncés en boîte mardi, 475 g réellement versés. | Tranché et écrit : tout le surplus va dans la boîte mardi, qui passe à **237 g/adulte**. `01-plats.md` aligné. Même traitement pour le poulet (420 g au lieu de 360 g) et le cabillaud (200 g au lieu de 170 g). |
| 🟠 | **Décompte faux et tampons manquants** : en-tête annonçant 23 étapes et 2 tampons, pour 24 étapes et 1 seul tampon. `memoire.md` §8 impose un tampon toutes les 40–50 min. | **3 tampons** (étapes 13, 21, 26) sur 27 étapes. Durée réannoncée à **3 h 20**. |
| 🟡 | Durée annoncée 2 h 50 alors que la dernière étape finissait à 03:04. | Corrigé à 3 h 20, avec la décomposition honnête : ≈ 1 h 55 de travail actif, le reste en cuisson non surveillée, tampons, vaisselle et refroidissement. |
| 🟡 | Curry en poudre : certains mélanges du commerce contiennent du piment, incompatible avec une tolérance « très faible ». | **« Curry doux »** imposé à l'étape 24, avec consigne de vérifier le pot avant de verser. |
| 🟡 | Chou-fleur présenté comme socle alors qu'il ne sert qu'au jeudi. | Distingué dans le tableau de mutualisation : socle = les racines ; le chou-fleur profite du four sans être un socle. |
| 🟡 | Haricots verts et tomates cerises en toute fin de saison à Paris au 19/09. | Note 3 ajoutée à `01-plats.md` : repli haricots verts **surgelés** (autorisé §6) et **radis roses** à la place des tomates cerises. |

---

## 🛒 Vérif Courses — ✅ COHÉRENT

⚠️ L'agent `Vérif Courses` a échoué **trois fois sur une erreur serveur 502**, sans rapport avec le contenu. L'audit a été mené par un sous-agent en lecture seule appliquant la même grille Q1–Q7.

### Bilan hebdomadaire (2 adultes)

| Catégorie | Cible | Calculé | Statut |
|---|---|---|---|
| Protéines animales cuites | 1,5–2,0 kg | **1,82 kg** | ✅ |
| Légumes | 3,0–4,0 kg | **3,36 kg** | ✅ |
| Féculents cuits (Adulte B seul) | 0,3–0,5 kg | **0,40 kg** | ✅ en plein milieu |

### Conversions et parage — tous couverts

| Ingrédient | Brut acheté | Produit | Besoin | Marge |
|---|---|---|---|---|
| Potimarron | 1,3 kg | 780 g | 740 g | +40 g |
| Carottes | 600 g | 405 g | 320 g | +85 g |
| Oignons rouges | 300 g | 225 g | 180 g | +45 g |
| Chou-fleur | 1,4 kg | 630 g | 580 g | +50 g |
| Poulet | 1,2 kg | 840 g | 840 g | juste |
| Lentilles | 350 g sec | 875 g | 875 g | juste |
| Cabillaud / maquereau | 500 / 450 g | 400 / 360 g | 400 / 360 g | juste |
| Épinards | 600 g | 198 g | 100 g servis | +98 g |
| Champignons | 500 g | 250 g | 240 g | +10 g |

### ⭐ Q7 — Ventilation dans le plan de session

Le contrôle né de l'erreur des 2 boîtes de tomates de la semaine 1. **7 ingrédients partagés sur 9 parfaitement ventilés**, 2 remarques mineures corrigées depuis.

| Ingrédient | Acheté | Étapes | Somme = achat ? |
|---|---|---|---|
| Gingembre | 40 g | É8 (20 g) → É24 (15 g) | ✅ + 5 g de parage |
| Oignon jaune | 300 g | É23 (150 g) → É24 (150 g) | ✅ exact |
| Persil | 1 botte | É25 chermoula (½) + É25 pot mardi (½) | ✅ exact |
| Lentilles cuites | 875 g | É12 → mardi 475 g + dhal 400 g | ✅ exact |
| Potimarron rôti | 780 g | É11 → 200 + 240 + 300 | ✅ +40 g |
| Quinoa | 250 g | É10 (80 g) + 60 g réservés | ✅ |
| **Ail** | 8 gousses | É6 · É8 · É9 · É19 · É23 · É24 (×2) · É25 | ✅ — **rendu progressif depuis** : « 1ʳᵉ sur 8 · reste 7 », etc. |
| Citrons | 3 | É9 (½) · É25 (1) · dhal (½) · brocoli (½) | ✅ — **marge de ½ désormais documentée** |

**Aucun renvoi vers un autre fichier ou une section annexe.** Tous les numéros d'étapes recoupés après correction : exacts.

### Autres contrôles

- **Q4** — Tous les conditionnements sont achetables. Aucun trempage requis : les lentilles vertes du Puy cuisent en 25 min départ eau froide, parade assumée à l'absence d'autocuiseur.
- **Q5** — Répartition marché/supermarché correcte. Courses annoncées **le samedi**, conforme.
- **Q6** — **16 contenants**, contre 21 la semaine dernière. Les 5 plats sont assemblés en boîte ; les 4 sauces, 4 herbes, crudités, œufs et croquant restent à part.
- **Liste brute Rappels iOS** — présente, 33 articles, cohérente avec les tableaux, une ligne par tâche.

---

## 🎯 Verdict

**Menu prêt.** Aucun 🔴, aucun 🟠 subsistant.

## 📊 Ce que la semaine 2 change, chiffré

| | Semaine 1 (14/09) | Semaine 2 (21/09) |
|---|---|---|
| Socles réels dans les plats | **0** (le velouté était un accompagnement) | **3** |
| Cuissons de protéines | 5 séparées | **3** (1 poulet, 2 poissons sur la même plaque) |
| Types de légumineuses | 4 | **1** |
| Contenants | 21 | **16** |
| Durée annoncée | 2 h 00, *hors* sauces et vaisselle | **3 h 20, tout compris** |
| Durée réelle | **3 h 30** (sauces non comprises) | à mesurer |
| Prélèvements à tracer | 7 | **0** (bébé hors périmètre) |

**Le seul chiffre qui comptera est le temps réel.** L'encart est en pied de `03-session.md` — c'est lui qui dira si la règle des 3 socles tient sa promesse, et s'il faut réviser l'objectif de `memoire.md` §8.

## 🔍 Ce que cet audit apprend sur le nouveau format

1. **Le format en étapes autonomes marche, mais il fragilise la numérotation.** Cinq renvois sont devenus faux dès que le nombre d'étapes a bougé. Parade adoptée : **toujours nommer l'étape citée** (« étape 24 — Dhal »), pas seulement la numéroter.
2. **La vue d'ensemble est le nouveau point de désynchronisation.** Elle doit être régénérée depuis les badges de piste réels, jamais écrite à la main en parallèle des étapes.
3. **Les surplus de socle doivent être affectés explicitement.** Un socle produit toujours un peu plus que la somme des parts : sans affectation écrite, l'écart se retrouve entre les fichiers. Règle appliquée ici aux trois socles.
