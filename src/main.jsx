import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import { AuthContextProvider } from "./context/AuthContext";
import { SWRConfig } from "swr";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig
    value={{
      fetcher: (...args) => {
        return axios.get(...args).then((res) => res.data);
      },
      suspense: true,
    }}
  >
    <Suspense
      fallback={
        <div className="grid grid-cols-1 place-content-center h-screen">
          <p className="text-center font-semibold text-5xl">Cargando...</p>
        </div>
      }
    >
      <Router>
        <AuthContextProvider>
          <GlobalContextProvider>
            <App />
          </GlobalContextProvider>
        </AuthContextProvider>
      </Router>
    </Suspense>
  </SWRConfig>
);
