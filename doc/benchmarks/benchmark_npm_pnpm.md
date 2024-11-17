 <a href="../../README.md">
  <img src="../../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>
<a href="../../doc/benchmarks.md">
  <img src="../../assets/button/previous_page.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../../assets/line/border_deco_rt.png)

# BENCHMARK NPM PNPM

![border](../../assets/line/line-pink-point_l.png)

## Sommaire

![border](../../assets/line/line-teal-point_r.png)

- [Explications supplémentaires](#explications-supplémentaires)
  - [Vitesse](#vitesse-)
  - [Espace Disque](#espace-disque-)
  - [Facilité d’utilisation](#facilité-dutilisation-)

![border](../../assets/line/border_deco_rb.png)

# Tableau Comparatif

| Critère                            | npm                                                         | pnpm                                                    |
| ---------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| **Vitesse (1ère install)**         | ~35 secondes                                                | ~20 secondes                                            |
| **Vitesse (réinstallation)**       | ~15 secondes                                                | ~5 secondes                                             |
| **Utilisation de l’espace disque** | Dépendances copiées pour chaque projet, consommation élevée | Symlinks vers un cache global, consommation minimale    |
| **Gestion du cache**               | Télécharge chaque fois, même si déjà installé               | Réutilise les paquets du cache global                   |
| **Structure `node_modules`**       | Arborescence plate, duplication des dépendances             | Arborescence optimisée, utilisation des symlinks        |
| **Strict Peer Dependencies**       | Moins strict (peut installer malgré des erreurs)            | Très strict, refuse si des conflits existent            |
| **Facilité d’utilisation**         | Prêt à l’emploi (pré-installé avec Node.js)                 | Requiert une installation manuelle                      |
| **Support multi-projets**          | Inefficace (chaque projet consomme de l’espace disque)      | Très efficace grâce à la centralisation des dépendances |

![border](../../assets/line/line-pink-point_r.png)

# Explications supplémentaires

## Vitesse :

npm est plus lent car il copie chaque dépendance dans le dossier node_modules.
pnpm est plus rapide grâce à l'utilisation de symlinks et d'un cache partagé.

## Espace disque :

npm installe des copies distinctes pour chaque projet.
pnpm utilise un dossier central pour stocker les dépendances partagées entre projets.

## Facilité d’utilisation :

npm est directement disponible avec Node.js.
pnpm nécessite une installation préalable.
Conclusion
Utilise npm si tu veux la simplicité et éviter des configurations supplémentaires.
Utilise pnpm pour des projets complexes ou lorsque tu veux optimiser les performances et l'espace disque.

![border](../../assets/line/line-pink-point_r.png)

<a href="#sommaire">
  <img src="../../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../../assets/line/border_deco_l.png)
