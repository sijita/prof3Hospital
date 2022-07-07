import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./hooks/useGlobalContext";
import Home from "./pages/Home";
import LoginHome from "./pages/LoginHome";
import Patients from "./pages/Patients";
import QuotesList from "./pages/QuotesList";
import Register from "./pages/Register";

function App() {
  const { loggedUser, setLoggedUser } = useGlobalContext();

  useEffect(() => {
    setLoggedUser(localStorage.getItem("logged"));
  }, [loggedUser, setLoggedUser]);

  return (
    <Routes>
      {!loggedUser ? (
        <>
          <Route index exact element={<LoginHome />} />
          <Route path="/register" element={<Register />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/appointments" element={<QuotesList />}>
            <Route path=":id" element={<QuotesList />} />
          </Route>
          <Route path="/patients" element={<Patients />}>
            <Route path=":id" element={<Patients />} />
          </Route>
        </>
      )}
      <Route path="*" element={<p>No se encontró la ruta</p>} />
    </Routes>
  );
}

export default App;
