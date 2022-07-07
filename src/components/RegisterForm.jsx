import InputComp from "./subcomponents/InputComp";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function RegisterForm() {
  const { doctor, setDoctor, handleRegister, confirmPassword, error } =
    useAuthContext();

  const handleDataChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-10 lg:w-5/12 w-10/12">
      <p className="text-4xl font-bold text-center">Registrarse</p>
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <InputComp
            name="name"
            value={doctor.name}
            label="Nombres"
            type="text"
            placeholder="Nombres"
            onChange={handleDataChange}
          />
          <InputComp
            name="lastName"
            value={doctor.lastName}
            label="Apellidos"
            type="text"
            placeholder="Apellidos"
            onChange={handleDataChange}
          />
        </div>
        <InputComp
          name="identification"
          value={doctor.identification}
          label="Cedula"
          type="number"
          placeholder="Cedula de ciudadania"
          onChange={handleDataChange}
        />
        <InputComp
          name="email"
          value={doctor.email}
          label="Email"
          type="email"
          placeholder="Correo electrónico"
          onChange={handleDataChange}
        />
        <div className="flex flex-col lg:flex-row gap-5">
          <InputComp
            name="password"
            value={doctor.password}
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            onChange={handleDataChange}
          />
          <InputComp
            refer={confirmPassword}
            label="Confirmar contraseña"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <p className={`${error ? "block" : "hidden"} text-center text-red-500`}>{error}</p>
        <div className="mt-5 w-full">
          <button className="btn btn-primary w-full">Registrarme</button>
        </div>
        <Link className="w-full" to="/">
          <button className="btn bg-base-200 hover:bg-base-300 border-none text-black w-full">
            Volver
          </button>
        </Link>
      </form>
    </div>
  );
}
