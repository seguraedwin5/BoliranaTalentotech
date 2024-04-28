import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Alquiler, Campeonatos, Eventos } from "../pages";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/campeonatos", element: <Campeonatos /> },
      { path: "/eventos", element: <Eventos /> },
      { path: "/alquiler", element: <Alquiler /> },
    ],
  },
]);
