import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkModeContextProvider } from "./Context/DarkModeContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);
