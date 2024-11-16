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
  - [Premiers pas avec Nest JS ](#get-started-avec-nestjs)

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

- Puis dans **App** nous allons ajouter un nouveau fichier

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

- Puis nous retournons dans **Layout.tsx** afin d'y ajouter notre dark theme ainsi que quelques autres elements :

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

![border](../assets/line/line-pink-point_r.png)

## Get Started avec Nest.js

![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire">
  <img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_l.png)
