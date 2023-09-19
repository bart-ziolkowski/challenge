import { App } from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
