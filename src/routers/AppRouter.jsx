import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../components/login/AuthLayout";
import { DashboardRoutes } from "./DashboardRouter";

export const AppRouter = () => {
  const { autenticado } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        {autenticado ? (
          <Route path="/*" element={<DashboardRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthLayout />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
