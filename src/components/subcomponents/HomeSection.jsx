import React from "react";
import {
  BiDetail,
  BiHandicap,
  BiPlusMedical,
  BiSearchAlt,
  BiPaste,
} from "react-icons/bi";
import Card from "./Card";
import Table from "./Table";

export default function HomeSection() {
  return (
    <div className="flex flex-col justify-center items-center w-10/12 gap-20">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
        <Card
          title={
            <>
              <BiDetail className="text-primary text-3xl" /> Próximas citas
            </>
          }
        />
        <Card
          title={
            <>
              <BiHandicap className="text-primary text-3xl" />
              Mis pacientes
            </>
          }
        />
        <Card
          title={
            <>
              <BiPlusMedical className="text-primary text-3xl" />
              Consultorios
            </>
          }
        />
      </div>
      <div className="flex w-full gap-20">
        <div className="flex-1">
          <Card
            title="Atajos"
            body={
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1">
                  <Card
                    title={
                      <>
                        <BiPaste className="text-primary text-3xl " />
                        Agendar nueva cita
                      </>
                    }
                  />
                </div>
                <div className="flex-1">
                  <Card
                    title={
                      <>
                        <BiSearchAlt className="text-primary text-3xl" />
                        Ver citas
                      </>
                    }
                  />
                </div>
              </div>
            }
          />
        </div>
        <div className="flex-1">
          <Card
            title="Mi consultorio"
            body={
              <Card
                title={
                  <>
                    <BiPaste className="text-primary text-3xl " />
                    Consultorio #1
                  </>
                }
              />
            }
          />
        </div>
      </div>
      <div className="w-full">
        <Card title="Mis citas" body={<Table />} />
      </div>
    </div>
  );
}
