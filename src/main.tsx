import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>
  </AuthProvider>
);
