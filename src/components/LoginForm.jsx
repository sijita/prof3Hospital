import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import InputComp from "./subcomponents/InputComp";

export default function LoginForm() {
  const { handleLogin, doctor, setDoctor, error } = useAuthContext();

  const handleDataChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-10 w-11/12 lg:w-8/12 items-center"
    >
      <p className="text-4xl font-bold text-center">Iniciar sesión</p>
      <InputComp
        name="email"
        value={doctor.email}
        label="Email"
        type="email"
        placeholder="email@mail.com"
        onChange={handleDataChange}
      />
      <InputComp
        name="password"
        value={doctor.password}
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        onChange={handleDataChange}
      />
        <p className={`${error ? "block" : "hidden"} text-center text-red-500`}>
          {error}
        </p>
      <div className="form-control flex flex-col sm:flex-row gap-5 w-full items-center justify-between">
        <label className="label cursor-pointer gap-5">
          <span className="label-text">Recordarme</span>
          <input
            type="checkbox"
            checked="checked"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <p className="text-primary underline">Olvidé mi contraseña</p>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <button className="btn btn-primary w-full">Iniciar sesión</button>
        <Link className="w-full" to="/register">
          <button className="btn bg-base-200 hover:bg-base-300 border-none text-black w-full">
            Registrarme
          </button>
        </Link>
      </div>
    </form>
  );
}
