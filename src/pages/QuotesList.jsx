import { useState, useEffect } from "react";
import {
  BiEditAlt,
  BiTrash,
  BiSearchAlt,
  BiSearchAlt2,
  BiPlus,
} from "react-icons/bi";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { mutate } from "swr";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/subcomponents/Footer";
import Header from "../components/subcomponents/Header";
import Table from "../components/subcomponents/Table";
import ModalAppointments from "../components/ModalAppointments";

export default function QuotesList() {
  const {
    appointments,
    API,
    setIsAppointModalOpen,
    isAppointModalOpen,
    setAppointment,
  } = useGlobalContext();

  const { id } = useParams();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const appointmentFound = appointments.find((item) => item.id == id);
    if (appointmentFound) {
      setAppointment(appointmentFound);
    }
  }, [id, appointments, setAppointment]);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? appointments
    : appointments.filter((item) =>
        item.patient.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(search.replace(/\s+/g, "").toLowerCase())
      );

  return (
    <div className="bg-base-200">
      <Header />
      <div className="flex flex-col container mx-auto p-20 justify-center items-center">
        <div className="bg-white p-10 w-full rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row gap-5 items-center w-full justify-between mb-10">
            <p className="text-2xl font-bold">Mis citas</p>
            <div className="flex justify-center items-center w-full lg:w-auto">
              <input
                type="text"
                placeholder="Buscar por nombre de paciente..."
                onChange={searcher}
                className="input input-bordered rounded-r-none rounded-xl w-full lg:w-96"
              />
              <button className="btn btn-square btn-primary rounded-l-none rounded-xl">
                <BiSearchAlt2 className="text-xl" />
              </button>
            </div>
            <button
              className="btn btn-primary flex gap-2"
              onClick={() => {
                setAppointment({
                  condition: "",
                  patientId: 0,
                  createdAt: "",
                });
                setIsAppointModalOpen(!isAppointModalOpen);
              }}
            >
              Agregar cita
              <BiPlus className="text-xl" />
            </button>
            <ModalAppointments />
          </div>
          <Table
            rows={
              results.length !== 0 ? (
                results.map((appointment) => (
                  <tr key={appointment.id} className="text-center">
                    <td>
                      <div className="flex items-center">
                        <div className="avatar justify-start">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`https://avatars.dicebear.com/api/miniavs/${appointment.patient.name}.svg`}
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="font-bold w-full">
                          {appointment.patient.name +
                            " " +
                            appointment.patient.lastName}
                        </div>
                      </div>
                    </td>
                    <td>
                      {new Date(
                        Date.parse(appointment.createdAt)
                      ).toLocaleString()}
                    </td>
                    <td>{appointment.condition}</td>
                    <td className="flex gap-3 justify-center flex-nowrap">
                      <button className="btn btn-info flex-nowrap flex gap-2">
                        Ver <BiSearchAlt className="text-lg" />
                      </button>
                      <Link to={`/appointments/${appointment.id}`}>
                        <button
                          className="btn btn-warning flex-nowrap flex gap-2"
                          onClick={() => {
                            setIsAppointModalOpen(!isAppointModalOpen);
                          }}
                        >
                          Editar
                          <BiEditAlt className="text-lg" />
                        </button>
                      </Link>
                      <button
                        className="btn btn-error flex-wrap flex gap-2"
                        onClick={async (e) => {
                          e.preventDefault();
                          await axios.delete(
                            API + `appointment/${appointment.id}`
                          );
                          mutate(API + "appointments");
                        }}
                      >
                        Eliminar
                        <BiTrash className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-center">No se encontraron datos</td>
                  <td className="text-center">No se encontraron datos</td>
                  <td className="text-center">No se encontraron datos</td>
                  <td className="text-center">No se encontraron datos</td>
                </tr>
              )
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
