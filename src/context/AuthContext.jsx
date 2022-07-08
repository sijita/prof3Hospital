import { createContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../config";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const confirmPassword = useRef("");
  const [credentials, setCredentials] = useState(null);
  const [error, setError] = useState(null);
  const [doctor, setDoctor] = useState({
    identification: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (doctor.password !== confirmPassword.current.value) {
        throw new Error();
      } else {
        const url = API + "register";
        await axios
          .post(url, doctor)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            if (
              err.response.data.message.code === "P2002" &&
              err.response.data.message.target.split("_")[1] ===
                "identification"
            ) {
              setError("El numero de identificación ya existe");
            } else if (
              err.response.data.message.code === "P2002" &&
              err.response.data.message.target.split("_")[1] === "email"
            ) {
              setError("El correo ya existe");
            }
          });
      }
    } catch (error) {
      setError("Las contraseñas no coinciden");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = API + "login";
    await axios
      .post(url, doctor)
      .then((res) => {
        window.localStorage.setItem("logged", JSON.stringify(res.data));
        navigate("/home", {
          replace: true,
        });
      })
      .catch((err) => {
        const error = err.response.data;
        setError(error.message);
      });
  };

  if (error) {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  const data = {
    doctor,
    setDoctor,
    handleRegister,
    confirmPassword,
    error,
    handleLogin,
    credentials,
    setCredentials,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
export default AuthContext;
