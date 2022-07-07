import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import InputComp from "./InputComp";

export default function PatientForm() {
  const {
    patient,
    setPatient,
    handleAddPatient,
    isPatientModalOpen,
    setIsPatientModalOpen,
  } = useGlobalContext();

  const {pathname} = useLocation();

  const handleDataChange = (e) => {
    e.preventDefault();
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleAddPatient}>
      <InputComp
        name="identification"
        value={patient.identification}
        label="Identificación del paciente"
        type="text"
        placeholder="Identificación del paciente"
        onChange={handleDataChange}
      />
      <div className="flex flex-row gap-5 w-full justify-between items-center">
        <InputComp
          name="name"
          value={patient.name}
          label="Nombres del paciente"
          type="text"
          placeholder="Nombres del paciente"
          onChange={handleDataChange}
        />
        <InputComp
          name="lastName"
          value={patient.lastName}
          label="Apellidos del paciente"
          type="text"
          placeholder="Apellidos del paciente"
          onChange={handleDataChange}
        />
      </div>
      <InputComp
        name="email"
        value={patient.email}
        label="Correo electrónico"
        type="text"
        placeholder="Correo electrónico"
        onChange={handleDataChange}
      />
      <InputComp
        name="phoneNumber"
        value={patient.phoneNumber}
        label="Número de teléfono"
        type="text"
        placeholder="Número de teléfono"
        onChange={handleDataChange}
      />
      <button className="btn btn-primary w-full mt-5">Aceptar</button>
      <div>
        <Link to={pathname.endsWith("home") ? "/home" : "/patients"}>
          <button
            className="btn btn-error w-full"
            onClick={() => {
              setIsPatientModalOpen(!isPatientModalOpen);
            }}
          >
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
}
