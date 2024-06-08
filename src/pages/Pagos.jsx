import React, { useState, useEffect } from "react";
import axios from "axios";
const url = import.meta.env.VITE_API_URL;
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
      const response = await axios.get(url + "/pagos");
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
    // Validar si el campo "valor" está vacío
    if (!nuevoPago.valor) {
      alert("Por favor, ingrese un valor para el pago.");
      return; // Salir de la función si el campo "valor" está vacío
    }
    e.preventDefault();
    try {
      await axios.post(url + "/pagos", nuevoPago);
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
      <h2 className="text-center">Pagos</h2>
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
          <label>
            Valor:
            <input
              type="number"
              name="valor"
              value={nuevoPago.valor}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Tipo de Pago:
            <select
              name="tipo_pago"
              value={nuevoPago.tipo_pago}
              onChange={handleInputChange}
            >
              <option value="">Seleccione un tipo de pago</option>
              {["Efectivo", "Tarjeta", "Transferencia"].map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </label>{" "}
          <button
            type="submit"
            className="cursor-pointer shadow-smbg-cyan-500 p-2 mx-1 rounded text-black hover:bg-green-700 bg-green-100"
          >
            Crear Pago
          </button>
        </div>
      </form>
      <h3>Lista de Pagos</h3>
      <ul>
        {pagos.map((pago) => (
          <li key={pago._id}>
            Bolirana: <strong>{pago.bolirana ? "Sí" : "No"}</strong>, Valor:{" "}
            <strong>{pago.valor}</strong>, Tipo de pago:{" "}
            <strong>{pago.tipo_pago}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagos;
