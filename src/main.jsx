import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {QueryClient, QueryClientProvider, useQuery,} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </ThemeProvider>
);
