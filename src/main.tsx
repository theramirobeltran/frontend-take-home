import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./context";
import { ErrorBoundary } from "./components";
import { theme } from "./theme";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ErrorBoundary>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
