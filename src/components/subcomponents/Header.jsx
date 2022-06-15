import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-10 flex-col md:flex-row p-8 bg-white justify-around items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <p className="bg-primary p-2 px-10 rounded-lg text-white font-semibold">
            MyHospital
          </p>
        </div>
        <div className="flex gap-10 items-center">
          <p>Simón Jiménez Tamayo</p>
          <button>🛎️</button>
          <img
            src="https://avatars.dicebear.com/api/miniavs/.svg"
            className="w-12 border rounded-full"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
}
