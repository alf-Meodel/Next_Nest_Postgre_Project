"use client"; // Indique que ce fichier est un Client Component

import darkTheme from "@/app/dark.theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container>{children}</Container>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
