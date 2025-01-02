import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/_common.css";
import App from "./core/App/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
