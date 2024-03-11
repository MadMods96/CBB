import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

let x = document.getElementsByTagName("tldx-lmi-shadow-root");
if (x[0]) {
  x[0].remove();
}
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
