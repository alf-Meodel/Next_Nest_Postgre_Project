 <a href="../README.md">
  <img src="../assets/button/home_page.png" alt="Home page" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_rt.png)

# INSTALLATION GUIDE

![border](../assets/line/line-pink-point_l.png)

## Sommaire

![border](../assets/line/line-teal-point_r.png)

- [Get Started](#get-started)
  - [Installation](#installation)
  - [Material UI](#material-ui)
  - [Authentification Components](#authentification-components)
- [Backend avec Nest JS ](#backend-avec-nestjs)
  - [Introduction ](#introduction)
  - [Mise à niveau avec pnpm](#mise-à-niveau-avec-pnpm)
  - [Creation d'un workspace](#creation-dun-workspace-pour-simplifier-le-travail-sur-vscode)
  - [Erreurs de compatibilité windows en cascades](#erreurs-de-compatibilité-windows-en-cascades)
  - [Retour à NestJS](#retour-à-linstallation-nestjs)

![border](../assets/line/border_deco_rb.png)

# Get Started

## Installation

- Pour commencer nous allons créer la base de notre projet en utilisant **NextJS**

```
npx create-next-app@14.1.0
```

- dans les étapes de création de nextjs voici celles que nous n'allons pas ajouter à notre projet ,

  - use `src/` directory? » No,
  - import alias (@/\*)? ... No

- Après l'installation nous allons simplement aller dans le dossier de notre projet

```
cd .\shoppy-ui\
```

- Puis nous directement lancer notre projet nextjs avec

```
npm run dev
```

- Ensuite nous allons "nettoyer" notre projet en supprimant le texte inutile par défaut de nextjs

### page.tsx :

```
export default function Home() {
  return (
    <>
    </>
  );
}
```

### globals.css :

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

![border](../assets/line/line-teal-point_r.png)

## Material UI

- Nous allons maintenant installer tout le nécessaire pour notre Material UI avec les installations suivante

```
npm i --save @mui/material @emotion/react @emotion/styled @mui/material-nextjs @emotion/cache
```

- Puis nous allons dans **layout.tsx** qui gère la structure
- Pour rajouter **un nouvel import**

```
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
```

- qui va nous permettre d'envelopper le children de notre layout avec le cache de Material UI

```
    <AppRouterCacheProvider>
          {children}
    </AppRouterCacheProvider>
```

- Dans **App** nous allons ajouter un nouveau fichier

```
dark.theme.ts
```

- Puis nous allons rajouter à l'intérieur le code suivant afin de configurer le thème de notre application avec un mode sombre

```
"use client"

import { createTheme } from "@mui/material"

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

export default darkTheme;
```

- Ensuite nous retournons dans **Layout.tsx** afin d'y ajouter notre dark theme ainsi que quelques autres elements :

- ne pas oublier l'import **@mui/material** qui ne semble pas vouloir se placer automatiquement

```
import { Container } from "@mui/material";
```

- Puis nous allons ajouter les elements suivants

```
<AppRouterCacheProvider>
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
        <Container>
              {children}
        </Container>
    </ThemeProvider>
</AppRouterCacheProvider>
```

- Mais à ce stade des erreurs surviennent car "use client" doit être utilisé pour couvrir la librairie **"@emotion/react"**

- Nous allons donc **isoler cette partie du code** afin de la placer dans un component séparé qui sera importé dans **Layout.tsx** et bénficiera de la directive **"use client"**

- **Creation du dossier components/ClientProviders.tsx** pour isoler la partie du code qui utilise la directive **"use client"**

![border](../assets/line/line-teal-point_r.png)

## Authentification Components

- Nous allons créer pour l'authentification dans app le dossier **auth** dans lequel se trouveront le dossier **login** ainsi que le dossier **signup** , dans lesquels respectivement se trouveront les fichiers page.tsx avec la structure ( copié collé) de Home :

```
export default function Login() {
    return (
        <>
        </>
    );
}
```

- nous pouvosn ainsi vérifier que les routes sont disponibles à partir de l'url en écrivant le nom du dossier **auth/login** à la suite

- Ensuite dans le dossier auth nous allons créer un fichier layout.tsx qui contiendra la structure de base de nos pages d'authentification

```
import { Box } from "@mui/material"

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Box className="h-screen flex items-center justify-center">
            {children}
        </Box>
    )
}
```

- Puis nous allons créer notre composant de login avec la structure suivante :

```
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from 'next/link'

export default function Login() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email" variant="outlined" type="email" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained">
                Login
            </Button>
            <Link component={NextLink} href="/auth/signup"
                className="self-center"
            >
                Signup
            </Link>
        </Stack>
    );
}
```

- PS ne pas oublier d'utiliser l'import Link de material ui
- Pour eviter le probleme d'incompatibilité avec le paramètre component={NextLink}

```
import { Button, Link, Stack, TextField } from "@mui/material";
```

- Et enfin nosu allons ajouter la section signup en copiant ce qui se trouve dans login en inversant les liens de rediurections et en modifiant le nom du bouton d'action

```
export default function Signup() {
    return (
        <Stack spacing={2} className="w-full max-w-xs">
            <TextField label="Email" variant="outlined" type="email" />
            <TextField label="Password" variant="outlined" type="password" />
            <Button variant="contained">
                Signup
            </Button>
            <Link component={NextLink} href="/auth/login" className="self-center">
                Login
            </Link>
        </Stack>
    );
}
```

<a href="#sommaire"><img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

![border](../assets/line/line-pink-point_r.png)

# Backend avec Nest.js

## Introduction

- Nous allons installer NestJS en utilisant le CLI dans le scope global

```
npm i -g @nestjs/cli@latest
```

- Puis dans notre repo dans le dossier code nous allons init notre backend

```
nest new shoppy-backend
```

![border](../assets/line/line-teal-point_r.png)

## Mise à niveau avec pnpm

- Dans un premier temps nous allons vérifier que pnpm est disponible

```
pnpm --version
```

- Si pnpm n'est pas installé, nous allons l'installer

```
npm install -g pnpm
```

- Nous allons vérifier si l'installation à réussi

```
pnpm --version
```

- Une fois pnpm installé et reconnu, nous allons exécuter la commande suivante afin d'installer les dépendances :

```
pnpm install --strict-peer-dependencies=false
```

- à présent que pnpm est installé avec ses dépendances nous exécutons à nouveau la commande pour installer NestJS

```
nest new shoppy-backend
```

<a href="#sommaire"><img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

## Creation d'un workspace pour simplifier le travail sur vscode

### Où se situer pour faire "Add Folder to Workspace" ?

- Pas besoin de se déplacer dans le terminal :

- Ce processus ne dépend pas de notre position actuelle dans le projet.
- Ainsi nous pouvons lancer Visual Studio Code depuis n’importe où.

### Étapes détaillées :

- Lancer VS Code :

- Ouvre VS Code.
- Si tu vois une fenêtre avec un projet déjà ouvert, ce n'est pas grave.
- Ajouter les dossiers :

- Dans le menu en haut, clique sur File > Add Folder to Workspace.
- Navigue vers ton dossier code.
- Sélectionne le dossier shoppy-backend et clique sur Add.
- Répète la procédure pour le dossier shoppy-ui.

### Enregistrer l’espace de travail :

- Après avoir ajouté les deux dossiers :
- Va dans File > Save Workspace As....
- Enregistre ce fichier .code-workspace dans le dossier code :

```
shoppy.code-workspace
```

- Ouvrir l’espace de travail enregistré :

- Pour travailler plus tard, double-clique sur le fichier code-workspace que tu viens d’enregistrer.
  Cela rouvrira automatiquement shoppy-backend et shoppy-ui dans VS Code.

## Erreurs de compatibilité windows en cascades

- L'erreur suivante apparait à chaque page

```
Delete '␍' eslint(prettier/prettier)
```

### Pourquoi cette erreur se produit-elle ?

- Différence de fin de ligne :

Sous Windows, la fin de ligne est souvent configurée sur CRLF (carriage return + line feed).
Sous Linux/macOS, elle est généralement configurée sur LF (line feed seulement).
Votre configuration actuelle semble exiger LF, mais le code utilise CRLF, ce qui déclenche des erreurs.
ESLint avec Prettier :

La règle prettier/prettier d’ESLint impose un style spécifique pour les fichiers, y compris le type de fin de ligne.

<a href="../doc/readmore/rm_errors.md"><img src="../assets/button/read_more.png" alt="Read more" style="width: 150px; height: auto;"></a>

![border](../assets/line/line-pink-point_r.png)

## Retour à l'installation NestJS

- ce qui nous amène à une installation sans erreurs youpi ^^

- ensuite nous allons accéder à notre backend fraichement installé

```
cd .\shoppy-backend\
```

- Pour ouvrir le fichier main.js et **modifier le port 3001**

```
 await app.listen(process.env.PORT ?? 3001);
```

- Et e,nfin nous allons Lancer NESTjs

```
pnpm run start:dev
```

- Puis nous allons ouvrir **Postman**
- pour ouvrir une requete GET et y ajouter :

```
http://localhost:3001/
```

- Ce qui naturellement nous renvoie le `hello world` par defaut

## Preparer/Nettoyer NestJS

- Pour nettoyer NestJS, nous allons commencer par supprimer les fichiers **app.service.ts** et **app.controller.ts** puis **app.controller.sp...**

<a href="../doc/annexe/Nest_clean.md"><img src="../assets/button/read_more.png" alt="Read more" style="width: 150px; height: auto;"></a>

- Puis nous allons nettoyer le module `app.module.ts`
- ATTENTION : Lors de la sauvegarde le formatage crée une erreur car entre {} il n'existe pas d'espace ; cependant le formatage automatique rajoute un espace

- Pour contre cet effet indésirable nosu allons faire `ctrl + shift + p` et selectionner `File: Save without formating` afi nde contourner ce problème

```
import { Module } from '@nestjs/common';
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire"><img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;"></a>

![border](../assets/line/border_deco_l.png)
