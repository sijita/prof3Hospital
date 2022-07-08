import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginHome({ isLogged }) {
  return (
    <>
      {isLogged ? (
        <Navigate to="/home" />
      ) : (
        <div className="flex flex-col lg:flex-row h-screen justify-center items-center">
          <div className="flex-1 bg-base-200 h-full items-center justify-center hidden lg:flex">
            <p className="text-5xl font-bold">Bienvenido</p>
          </div>
          <div className="flex flex-1 h-full items-center justify-center w-11/12 lg:w-8/12">
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
}
