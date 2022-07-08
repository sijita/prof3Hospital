import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import LoginHome from "./pages/LoginHome";
import Patients from "./pages/Patients";
import QuotesList from "./pages/QuotesList";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route
        index
        exact
        element={
          <LoginHome
            isLogged={JSON.parse(window.localStorage.getItem("logged"))?.isLogged}
          />
        }
      />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<QuotesList />}>
          <Route path=":id" element={<Outlet />} />
        </Route>
        <Route path="/patients" element={<Patients />}>
          <Route path=":id" element={<Outlet />} />
        </Route>
      </Route>
      <Route path="*" element={<p>No se encontró la ruta</p>} />
    </Routes>
  );
}

export default App;
