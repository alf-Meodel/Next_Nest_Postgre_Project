 <a href="../../README.md">
  <img src="../../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>
<a href="../../doc/installation_guide.md">
  <img src="../../assets/button/previous_page.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../../assets/line/border_deco_rt.png)

# FIXED ERRORS

![border](../../assets/line/line-pink-point_l.png)

## Sommaire

![border](../../assets/line/line-teal-point_r.png)

- [Erreur de compatibilité CRLF / LF](#erreur-de-compatibilité-crlf--lf)

![border](../../assets/line/border_deco_rb.png)

# Erreur de compatibilité CRLF / LF

- Dans un premier temps nous allons ajouter dans le fichier `.prettierrc` le contenu suivant

```
{
  "endOfLine": "auto"
}
```

- auto : Prend en charge automatiquement le format utilisé par votre système (Windows = CRLF, Linux/macOS = LF).

- Nous pouvons forcer l'utilisation de lf , mais cela semble problematique ( impossibilité de travailler par la suite sous linux /macOS )

- Puis pour qu’ESLint n’impose pas de format de fin de ligne,nous allons désactiver la règle dans notre fichier ESLint `.eslintrc.js` :

```
module.exports = {
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
};
```

- ce qui nous donne quelque chose de semblable à ceci :

```
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Intégration de Prettier avec ESLint
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Gère automatiquement les fins de ligne
      },
    ],
  },
};
```

### Reformatter les fichiers existants

- Pour corriger tous les fichiers déjà affectés :

- Ouvrir le terminal dans votre projet.
- Lancer Prettier pour reformater tout le projet :

```
pnpm prettier --write .
```

### Configurer Visual Studio Code

#### Accéder au fichier settings.json

- Ouvre Visual Studio Code.
- Appuie sur Ctrl + , (ou Cmd + , sur macOS) pour ouvrir les paramètres.
- En haut à droite des paramètres, clique sur l'icône en forme de page avec un crayon : "Ouvrir les paramètres JSON".

#### Ajouter les paramètres

- Trouve un emplacement libre ou à la fin du fichier existant.
- Ajoute tes paramètres en t’assurant qu’ils ne sont pas en conflit avec d'autres lignes, voici le fichier complet avbec les modifications:

```
{
  "notebook.formatOnSave.enabled": true,
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "window.zoomPerWindow": false,
  "editor.formatOnSave": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.eol": "\n"
}
```

### Valider la correction

Sauvegardez les fichiers.
Redémarrez VS Code pour appliquer les changements.
Lancez la commande suivante pour vérifier si les erreurs persistent :

```
pnpm run lint
```

![border](../../assets/line/line-pink-point_r.png)

<a href="#sommaire">
  <img src="../../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../../assets/line/border_deco_l.png)
