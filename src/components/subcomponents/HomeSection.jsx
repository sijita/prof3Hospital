import React from "react";
import {
  BiDetail,
  BiHandicap,
  BiBody,
  BiUserPlus,
  BiPlusMedical,
  BiSearchAlt,
  BiPaste,
  BiHotel,
} from "react-icons/bi";
import Card from "./Card";
import Table from "./Table";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ModalAppointments from "../../components/ModalAppointments";
import ModalPatients from "../ModalPatients";

export default function HomeSection() {
  const {
    appointments,
    setIsAppointModalOpen,
    setIsPatientModalOpen,
    setPatient,
    setAppointment,
  } = useGlobalContext();
  return (
    <div className="flex flex-col justify-center items-center w-10/12 gap-20">
      <div className="flex flex-col 2xl:flex-row w-full gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="flex-1">
              <Card
                title={
                  <>
                    <BiDetail className="text-primary text-3xl" /> Próximas
                    citas
                  </>
                }
              />
            </div>
            <div className="flex-1">
              <Card
                title={
                  <>
                    <BiHandicap className="text-primary text-3xl" />
                    Próximos pacientes
                  </>
                }
              />
            </div>
          </div>
          <Card
            title="Atajos"
            body={
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1">
                  <Card
                    title={
                      <button
                        onClick={() => {
                          setAppointment({
                            condition: "",
                            patientId: 0,
                            createdAt: "",
                          });
                          setIsAppointModalOpen(true);
                        }}
                        className="flex items-center gap-5 text-lg font-normal"
                      >
                        <BiPaste className="text-primary text-3xl" />
                        Nueva cita
                      </button>
                    }
                  />
                  <ModalAppointments />
                </div>
                <div className="flex-1">
                  <Card
                    title={
                      <Link
                        to="/appointments"
                        className="flex items-center gap-5 text-lg font-normal"
                      >
                        <BiSearchAlt className="text-primary text-3xl" />
                        Ver citas
                      </Link>
                    }
                  />
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-col w-full">
          <Card
            body={
              <div className="flex flex-col gap-5">
                <Card
                  title="Mi consultorio"
                  body={
                    <Card
                      title={
                        <div className="flex items-center gap-5 text-lg font-normal">
                          <BiHotel className="text-primary text-3xl" />
                          Consultorio #1
                        </div>
                      }
                    />
                  }
                />
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="flex-1">
                    <Card
                      title={
                        <button
                          onClick={() => {
                            setPatient({
                              name: "",
                              lastName: "",
                              identification: "",
                              email: "",
                              phoneNumber: "",
                            });
                            setIsPatientModalOpen(true);
                          }}
                          className="flex items-center gap-5 text-lg font-normal"
                        >
                          <BiUserPlus className="text-primary text-3xl" />
                          Agregar paciente
                        </button>
                      }
                    />
                    <ModalPatients />
                  </div>
                  <div className="flex-1">
                    <Card
                      title={
                        <Link
                          to="/patients"
                          className="flex items-center gap-5 text-lg font-normal"
                        >
                          <BiBody className="text-primary text-3xl" />
                          Ver pacientes
                        </Link>
                      }
                    />
                  </div>
                </div>
              </div>
            }
          ></Card>
        </div>
      </div>
      <div className="w-full">
        <Card
          title={
            <div className="w-full flex">
              <p>Mis citas</p>
              <Link to="/appointments">
                <button className="btn lg:w-64">Ver más</button>
              </Link>
            </div>
          }
          body={
            <Table
              rows={
                appointments.length !== 0 ? (
                  appointments.map((appointment) => (
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
                      <td>
                        <button className="btn btn-info">Ver</button>
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
          }
        />
      </div>
    </div>
  );
}
