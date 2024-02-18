import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Buscar from "./buscar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Buscar />
  </StrictMode>,
);
