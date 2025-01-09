import { createRoot } from "react-dom/client";
import "./styles/_common.css";
import App from "./core/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
