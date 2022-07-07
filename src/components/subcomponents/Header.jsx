import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle, BiBell } from "react-icons/bi";

export default function Header() {
  let navigate = useNavigate();
  return (
    <header>
      <nav className="flex gap-10 flex-col md:flex-row p-8 bg-white justify-around items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <Link
            to="/home"
            className="bg-primary p-2 px-10 rounded-lg text-white font-semibold"
          >
            MyHospital
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <p className="font-bold">Simón Jiménez Tamayo</p>
          <button>
            <BiBell className="text-xl" />
          </button>
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn bg-transparent border-none hover:bg-transparent m-1"
            >
              <img
                src="https://avatars.dicebear.com/api/miniavs/.svg?flip=1"
                className="w-12 border rounded-box"
                alt=""
              />
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    window.localStorage.removeItem("logged");
                    navigate("/", { replace: true });
                  }}
                  className="flex items-center justify-between"
                >
                  Cerrar sesión{" "}
                  <BiLogOutCircle className="text-lg text-error" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
