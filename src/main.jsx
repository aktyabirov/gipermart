import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from 'react-redux'; // Import the Redux Provider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./config/store.js";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}> 
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
  </ReduxProvider>
);
