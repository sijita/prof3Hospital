import React from "react";
import InputComp from "./subcomponents/InputComp";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="flex flex-col gap-10 w-5/12">
      <p className="text-4xl font-bold text-center">Registrarse</p>
      <div className="flex gap-5">
        <InputComp label="Nombres" type="text" placeholder="Nombres" />
        <InputComp label="Apellidos" type="text" placeholder="Apellidos" />
      </div>
      <InputComp
        label="Cedula"
        type="text"
        placeholder="Cedula de ciudadania"
      />
      <InputComp label="Email" type="email" placeholder="Correo electrónico" />
      <div className="flex gap-5">
        <InputComp
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
        />
        <InputComp
          label="Confirmar contraseña"
          type="password"
          placeholder="Contraseña"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <button className="btn btn-primary w-full">Registrarme</button>
        <Link className="w-full" to="/">
          <button className="btn bg-base-200 hover:bg-base-300 border-none text-black w-full">
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
}
