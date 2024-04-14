import { Routes, Route } from "react-router-dom";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

import Dashboard from "./pages/dashboard/Dashoboard";
import RevenueManagement from "./pages/dashboard/Results";

import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

import NotFound from "./pages/errors/NotFound";
import NotAuthorized from "./pages/errors/NotAuthorized";
import Chat from "./pages/dashboard/Chat";
import RootLayout from "./components/UI/Layout/Dashboard/RootLayout";
import AuthLayout from "./components/UI/Layout/AuthLayout";
import Results from "./pages/dashboard/Results"
function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          // <RequireAuth fallbackPath="/unauthorized">
          <RootLayout />
          // </RequireAuth>
        }
      >
        <Route path="" element={<Dashboard pageTitle="Dashboard" />} />
        <Route
          path="revenue-management"
          element={<Results pageTitle="Results table" />}
        />
        <Route path="chat" element={<Chat pageTitle="Consultancy" />} />
        {/* <Route path="settings" element={<Settings pageTitle="Настройки" />} /> */}
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
