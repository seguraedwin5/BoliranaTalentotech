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
      const response = await axios.get("/equipos");
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
      await axios.post("/equipos", nuevoEquipo);
      setNuevoEquipo({
        nombre: "",
        ubicacion: "",
      });
      fetchEquipos();
    } catch (error) {
      console.error("Error al crear el equipo:", error);
    }
  };

  return (
    <div>
      <h2>Equipos</h2>
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
        </div>
        <div>
          <label>
            Ubicación:
            <input
              type="text"
              name="ubicacion"
              value={nuevoEquipo.ubicacion}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Crear Equipo</button>
      </form>
      <h3>Lista de Equipos</h3>
      <ul>
        {equipos.map((equipo) => (
          <li key={equipo._id}>
            Nombre: {equipo.nombre}, Ubicación: {equipo.ubicacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipos;
