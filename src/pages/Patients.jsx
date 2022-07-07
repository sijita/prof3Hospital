import { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { mutate } from "swr";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/subcomponents/Footer";
import Header from "../components/subcomponents/Header";
import Table from "../components/subcomponents/Table";
import ModalPatients from "../components/ModalPatients";
import { BiEditAlt, BiTrash, BiSearchAlt, BiSearchAlt2, BiPlus } from "react-icons/bi";

export default function Patients() {
  const {
    patients,
    patient,
    API,
    setIsPatientModalOpen,
    isPatientModalOpen,
    setPatient,
  } = useGlobalContext();

  const { id } = useParams();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const patientFound = patients.find((item) => item.id == id);
    if (patientFound) {
      setPatient(patientFound);
    }
  }, [id, patients, setPatient]);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? patients
    : patients.filter((item) =>
        item.name
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
            <p className="text-2xl font-bold">Pacientes</p>
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
                setPatient({
                  name: "",
                  lastName: "",
                  identification: "",
                  email: "",
                  phoneNumber: "",
                });
                setIsPatientModalOpen(!isPatientModalOpen);
              }}
            >
              Agregar paciente
              <BiPlus className="text-xl" />
            </button>
            <ModalPatients />
          </div>
          <Table
            rows={
              results.length !== 0 ? (
                results.map((patient) => (
                  <tr key={patient.id} className="text-center">
                    <td>
                      <div className="flex items-center">
                        <div className="avatar justify-start">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={`https://avatars.dicebear.com/api/miniavs/${patient.name}.svg`}
                              alt="Avatar"
                            />
                          </div>
                        </div>
                        <div className="font-bold w-full">
                          {patient.name + " " + patient.lastName}
                        </div>
                      </div>
                    </td>
                    <td>{patient.identification}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phoneNumber}</td>
                    <td className="flex gap-3 justify-center flex-nowrap">
                      <button className="btn btn-info flex-nowrap flex gap-2">
                        Ver <BiSearchAlt className="text-lg" />
                      </button>
                      <Link to={`/patients/${patient.id}`}>
                        <button
                          className="btn btn-warning flex-nowrap flex gap-2"
                          onClick={() => {
                            setIsPatientModalOpen(!isPatientModalOpen);
                          }}
                        >
                          Editar
                          <BiEditAlt className="text-lg" />
                        </button>
                      </Link>
                      <button
                        className="btn btn-error flex-nowrap flex gap-2"
                        onClick={async (e) => {
                          e.preventDefault();
                          await axios.delete(API + `patient/${patient.id}`);
                          mutate(API + "patients");
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
