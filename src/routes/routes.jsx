import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Alquiler,
  Campeonatos,
  Equipos,
  Pagos,
  Eventos,
  Home,
  Login,
  Registro,
  Combos,
  AcercaDe,
} from "../pages";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/campeonatos", element: <Campeonatos /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/alquiler", element: <Alquiler /> },
      { path: "/login", element: <Login /> },
      { path: "/registro", element: <Registro /> },
      { path: "/combos", element: <Combos /> },
      { path: "/acercade", element: <AcercaDe /> },
      { path: "/equipos", element: <Equipos /> },
      { path: "/pagos", element: <Pagos /> },
    ],
  },
]);
