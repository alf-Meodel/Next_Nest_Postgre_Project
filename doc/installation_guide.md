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

- Mais à ce stade des erreurs surviennent à cause de l'écart des versions utilisés dans le tuto

![border](../assets/line/line-teal-point_r.png)

![border](../assets/line/line-pink-point_r.png)

<a href="#sommaire">
  <img src="../assets/button/back_to_top.png" alt="Back to top" style="width: 150px; height: auto;">
</a>

![border](../assets/line/border_deco_l.png)
