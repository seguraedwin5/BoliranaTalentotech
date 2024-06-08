import Input from "../components/Input";
import Section from "../components/Section";
import React, { Children, useContext, useState } from "react";
import axios from "axios";
import { SesionDataContext } from "../../Context";
import { useNavigate, Navigate } from "react-router-dom";
const url = import.meta.env.VITE_API_URL;
function Login() {
  const [sessiondata, Setsessiondata] = useContext(SesionDataContext);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(""); // Limpiar el mensaje anterior

    axios
      .post(url + "/users/login", formData)
      .then((res) => {
        console.log(res.data);
        Setsessiondata({ ...res.data });
        console.log("Inicio de sesión exitoso");
        console.log("sesion data:" + JSON.stringify(sessiondata));
        navigate("/"); // Redirigir a la página principal
      })
      .catch((error) => {
        console.error(error);
        setMessage(
          "Error en el inicio de sesión. Por favor, verifica tus credenciales."
        );
      });
  };

  return (
    <Section>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-white shadow-md flex flex-row flex-wrap gap-3 justify-center"
        >
          <h1 className="text-3xl w-full text-center ">Login</h1>
          <div className=" flex w-5/12 items-center justify-around">
            <label htmlFor="email">Correo electrónico:</label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex w-5/12 items-center justify-around">
            <label htmlFor="password">Contraseña:</label>
            <br></br>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className=" flex w-5/12 items-center justify-around">
            <button
              type="submit"
              className="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            transition-colors
            duration-300
          "
            >
              Entrar
            </button>
            <div className="flex w-5/12 items-center justify-around bg-red-300">
              {message && <p>{message}</p>}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
export default Login;
