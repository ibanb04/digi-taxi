import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./routers/AppRouter";
import { theme } from "./shared/themeConfig";
import "./index.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <ReactQueryDevtools />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
