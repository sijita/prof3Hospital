import { createContext, useState } from "react";
import { API } from "../config";
import useSWR from "swr";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const { pathname } = useLocation();

  const { data: appointments } = useSWR(API + "appointments");
  const { data: patients } = useSWR(API + "patients");

  const [loggedUser, setLoggedUser] = useState(null);
  const [isAppointModalOpen, setIsAppointModalOpen] = useState(false);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [patient, setPatient] = useState({
    name: "",
    lastName: "",
    identification: "",
    email: "",
    phoneNumber: "",
  });
  const [appointment, setAppointment] = useState({
    condition: "",
    patientId: 0,
    createdAt: "",
  });

  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    const url = API + "appointment";
    if (pathname.endsWith("appointments")) {
      await axios
        .post(url, {
          ...appointment,
          patientId: parseInt(appointment.patientId),
        })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          const error = err.response.data;
          setError(error.message);
        });
    } else {
      await axios
        .put(url + `/${pathname.split("/").pop()}`, {
          ...appointment,
          patientId: parseInt(appointment.patientId),
        })
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          const error = err.response.data;
          setError(error.message);
        });
    }
  };

  const handleAddPatient = async (e) => {
    e.preventDefault();
    const url = API + "patient";
    if (pathname.endsWith("patients")) {
      await axios
        .post(url, patient)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          const error = err.response.data;
          setError(error.message);
        });
    } else {
      await axios
        .put(url + `/${pathname.split("/").pop()}`, patient)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          const error = err.response.data;
          setError(error.message);
        });
    }
  };

  const data = {
    loggedUser,
    setLoggedUser,
    handleAddPatient,
    isPatientModalOpen,
    setIsPatientModalOpen,
    isAppointModalOpen,
    setIsAppointModalOpen,
    API,
    appointments,
    patients,
    appointment,
    setAppointment,
    handleAddAppointment,
    response,
    setResponse,
    error,
    setError,
    isOpen,
    setIsOpen,
    patient,
    setPatient,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
