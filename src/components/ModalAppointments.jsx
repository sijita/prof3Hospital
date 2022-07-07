import React from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import AppointmentForm from "./subcomponents/AppointmentForm";
import { mutate } from "swr";

export default function ModalAppointments() {
  const {
    isAppointModalOpen,
    setIsAppointModalOpen,
    error,
    response,
    setError,
    setResponse,
    API,
  } = useGlobalContext();
  return (
    <>
      {isAppointModalOpen ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-10/12 xl:w-4/12">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Nueva cita</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {!error ? (
                    !response ? (
                      <AppointmentForm />
                    ) : (
                      <div className="mt-5 flex flex-col gap-5">
                        <p className="text-center text-lg">
                          Cita creada satisfactoriamente
                        </p>
                        <button
                          className="btn btn-primary w-full"
                          onClick={() => {
                            setResponse(null);
                            mutate(API + "appointments");
                            setIsAppointModalOpen(!isAppointModalOpen);
                          }}
                        >
                          Aceptar
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="mt-5 flex flex-col gap-5">
                      <p className="text-center text-lg">
                        {error
                          ? error.code === "P2002" &&
                            "Este paciente ya tiene una cita asignada"
                          : response}
                      </p>
                      <button
                        className="btn btn-primary w-full"
                        onClick={() => {
                          setError(null);
                          setIsAppointModalOpen(!isAppointModalOpen);
                        }}
                      >
                        Aceptar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
