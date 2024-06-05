import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagos = () => {
  const [pagos, setPagos] = useState([]);
  const [nuevoPago, setNuevoPago] = useState({
    bolirana: false,
    valor: 0,
    tipo_pago: "",
  });

  useEffect(() => {
    fetchPagos();
  }, []);

  const fetchPagos = async () => {
    try {
      const response = await axios.get("/pagos");
      setPagos(response.data);
    } catch (error) {
      console.error("Error al obtener los pagos:", error);
    }
  };

  const handleInputChange = (e) => {
    setNuevoPago({
      ...nuevoPago,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/pagos", nuevoPago);
      setNuevoPago({
        bolirana: false,
        valor: 0,
        tipo_pago: "",
      });
      fetchPagos();
    } catch (error) {
      console.error("Error al crear el pago:", error);
    }
  };

  return (
    <div>
      <h2>Pagos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Bolirana:
            <input
              type="checkbox"
              name="bolirana"
              checked={nuevoPago.bolirana}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Valor:
            <input
              type="number"
              name="valor"
              value={nuevoPago.valor}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Tipo de pago:
            <input
              type="text"
              name="tipo_pago"
              value={nuevoPago.tipo_pago}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Crear Pago</button>
      </form>
      <h3>Lista de Pagos</h3>
      <ul>
        {pagos.map((pago) => (
          <li key={pago._id}>
            Bolirana: {pago.bolirana ? "Sí" : "No"}, Valor: {pago.valor}, Tipo
            de pago: {pago.tipo_pago}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagos;
