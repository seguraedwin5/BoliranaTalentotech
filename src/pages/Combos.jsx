import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/common/Card/Card";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;
function Combos() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    axios.get(url + "/combos").then((res) => {
      setCombos(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-5xl text-center mt-4">Combos</h1>
      <div className="relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 h-full p-20">
        {combos.map((combo) => {
          return (
            <Card
              titulo={combo.nombre}
              contenido={combo.descripcion}
              rutaimagen={combo.imagen}
              precio={combo.precio}
            />
          );
        })}
      </div>
    </>
  );
}

export default Combos;
