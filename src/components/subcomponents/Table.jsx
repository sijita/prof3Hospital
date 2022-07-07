import React from "react";
import { useLocation } from "react-router-dom";

export default function Table({ rows }) {
  const { pathname } = useLocation();
  return (
    <div className="overflow-x-auto w-full mt-5 shadow-lg rounded-lg">
      <table className="table w-full">
        <thead className="text-center">
          <tr>
            <th>Nombre</th>
            {pathname.includes("home") || pathname.includes("appointments") ? (
              <>
                <th>Fecha / hora</th>
                <th>Tipo de cita</th>
              </>
            ) : (
              pathname.includes("patients") && (
                <>
                  <th>Documento</th>
                  <th>Email</th>
                  <th>Telefono</th>
                </>
              )
            )}
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
