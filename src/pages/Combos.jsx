import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/common/Card/Card";

function Combos() {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    let newcombos = [
      {
        nombre: "Combo 1",
        descripcion: " Picada personal + gaseosa",
        precio: "$12.000",
        imagen:
          "https://th.bing.com/th/id/OIP.abf_Va533Ge6YWKNby9NRgHaEw?w=280&h=180&c=7&r=0&o=5&pid=1.7",
      },
      {
        nombre: "Combo 2",
        descripcion: "Hamburguesa + papas + gaseosa",
        precio: "$22.000",
        imagen:
          "https://th.bing.com/th/id/OIP.54V04Z2Z1fHZeUWfP2FNRgHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
      },
      {
        nombre: "Combo 3",
        descripcion: "Pizza Familiar + gaseosa",
        precio: "$32.000",
        imagen:
          "https://th.bing.com/th/id/OIP.54V04Z2Z1fHZeUWfP2FNRgHaE8?w=291&h=194&c=7&r=0&o=5&pid=1.7",
      },
      {
        nombre: "Combo ",
        descripcion: "",
        precio: "",
        imagen: "",
      },
      {
        nombre: "Combo ",
        descripcion: "",
        precio: "",
        imagen: "",
      },
    ];
    setCombos([...combos, ...newcombos]);
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
