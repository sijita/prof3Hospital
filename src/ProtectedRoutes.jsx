import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isLogged = JSON.parse(window.localStorage.getItem("logged"))?.isLogged;
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}
