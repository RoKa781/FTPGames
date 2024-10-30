import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./app/store/store";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter basename="/FTPGames">
        <App />
      </BrowserRouter>
    </HelmetProvider>
    </Provider>
  </StrictMode>
);
