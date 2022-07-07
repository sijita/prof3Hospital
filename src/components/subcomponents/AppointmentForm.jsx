import { useGlobalContext } from "../../hooks/useGlobalContext";
import InputComp from "./InputComp";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AppointmentForm() {
  const {
    patients,
    appointment,
    setAppointment,
    handleAddAppointment,
    isAppointModalOpen,
    setIsAppointModalOpen,
  } = useGlobalContext();

  const { pathname } = useLocation();

  const handleDataChange = (e) => {
    e.preventDefault();
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleAddAppointment}>
      <InputComp
        name="condition"
        value={appointment.condition}
        label="Tipo de cita"
        type="text"
        placeholder="Tipo de cita"
        onChange={handleDataChange}
      />
      <div>
        <p className="font-semibold text-lg label">Seleccionar fecha y hora</p>
        <input
          name="createdAt"
          value={appointment.createdAt}
          type="datetime-local"
          id="meeting-time"
          min={new Date().toISOString().slice(0, 16)}
          className="w-full input input-bordered"
          onChange={handleDataChange}
          required
        />
      </div>
      {pathname.split("/").length < 3 && (
        <div>
          <p className="font-semibold text-lg label">Seleccionar paciente</p>
          <select
            name="patientId"
            onChange={handleDataChange}
            className="select select-bordered w-full"
            value={appointment.patientId}
            required
          >
            <option value="">Seleccionar paciente</option>
            {patients.map((patient, index) => (
              <option key={index} value={patient.id}>
                {patient.name + " " + patient.lastName}
              </option>
            ))}
          </select>
        </div>
      )}
      <button className="btn btn-primary w-full mt-5">Aceptar</button>
      <div>
        <Link to={pathname.endsWith("home") ? "/home" : "/appointments"}>
          <button
            className="btn btn-error w-full"
            onClick={() => {
              setIsAppointModalOpen(!isAppointModalOpen);
            }}
          >
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
}
