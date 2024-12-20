import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router";
import { theme } from "./providers/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/terr-on">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
