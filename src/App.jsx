import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginHome from "./pages/LoginHome";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<LoginHome />} />
    </Routes>
  );
}

export default App;
