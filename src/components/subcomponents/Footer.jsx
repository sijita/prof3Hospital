import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row p-20 bg-white justify-around items-start gap-10">
      <div className="self-center">
        <p className="bg-primary p-2 px-10 rounded-lg text-white font-semibold">
          MyHospital
        </p>
      </div>
      <div className="w-full md:w-auto">
        <p className="text-2xl font-bold mb-5">Navigate</p>
        <p>Home</p>
        <p>Our solutions</p>
        <p>Corporate carrers</p>
        <p>News</p>
      </div>
      <div className="w-full md:w-auto">
        <p className="text-2xl font-bold mb-5">Contactanos</p>
        <p>3805 Edwards Road, Suite 700</p>
        <p>Cincinnati, Ohio 45209</p>
        <p>+1 (800) 580-8239</p>
      </div>
    </footer>
  );
}
