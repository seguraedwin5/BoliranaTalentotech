import React, { useState, useEffect } from "react";
import axios from "axios";

const Equipos = () => {
  const [equipos, setEquipos] = useState([]);
  const [nuevoEquipo, setNuevoEquipo] = useState({
    nombre: "",
    ubicacion: "",
  });

  useEffect(() => {
    fetchEquipos();
  }, []);

  const fetchEquipos = async () => {
    try {
      const response = await axios.get("http://localhost:8083/api/equipos");
      setEquipos(response.data);
    } catch (error) {
      console.error("Error al obtener los equipos:", error);
    }
  };

  const handleInputChange = (e) => {
    setNuevoEquipo({
      ...nuevoEquipo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8083/api/equipos", nuevoEquipo);
      setNuevoEquipo({
        nombre: "",
        ubicacion: "",
      });
      console.log("se creo el equipo con exito");
      fetchEquipos(); /* listamos los equipos */
    } catch (error) {
      console.error("Error al crear el equipo:", error);
    }
  };

  const handleEliminarEquipo = async (equipoId) => {
    try {
      console.log(equipoId);
      await axios.delete(`http://localhost:8083/api/equipos/${equipoId}`);
      fetchEquipos(); // Actualizar la lista de equipos después de eliminar
    } catch (error) {
      console.error("Error al eliminar el equipo:", error);
    }
  };

  return (
    <div>
      <h2 className="text-center">Equipos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={nuevoEquipo.nombre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Ubicación:
            <input
              type="text"
              name="ubicacion"
              value={nuevoEquipo.ubicacion}
              onChange={handleInputChange}
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer shadow-smbg-cyan-500 p-2 mx-1 rounded text-black hover:bg-green-700 bg-green-100"
          >
            Crear Equipo
          </button>
        </div>
      </form>
      <h2>Lista de Equipos</h2>
      <ul>
        {equipos.map((equipo) => (
          <li key={equipo?._id?.toString() || ""}>
            ID: '{equipo?._id?.toString()}', Nombre:{" "}
            <strong>{equipo.nombre}</strong>, Ubicación:{" "}
            <strong>{equipo.ubicacion}</strong>
            <button
              className="cursor-pointer shadow-smbg-cyan-500 p-1 mx-1 rounded text-black hover:bg-red-700 bg-red-100"
              onClick={() => handleEliminarEquipo(equipo._id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipos;
