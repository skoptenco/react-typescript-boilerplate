import React from "react";
import { createRoot } from "react-dom/client";

import App from "@/app";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element is missing");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
