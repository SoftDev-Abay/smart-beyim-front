import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "react-auth-kit/AuthProvider";
import store from "./auth/auth.ts";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
