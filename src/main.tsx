import { createRoot } from "react-dom/client";
import "./styles/_common.css";
import App from "./core/App/App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
