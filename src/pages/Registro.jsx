import Input from "../components/Input";
import Section from "../components/Section";
import React, { Children, useState } from "react";
import axios from "axios";
function Registro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    console.log(formData);
    axios
      .post("http://localhost:8083/api/users/register", formData)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        alert("usuario creado con id #: " + data);
      });
  };
  return (
    <Section>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="p-5 bg-white shadow-md flex flex-row flex-wrap gap-3 justify-center"
        >
          <h1 className="text-3xl w-full text-center ">Registro</h1>
          <div className="flex w-5/12 items-center justify-around">
            <label htmlFor="name">Nombre:</label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirmar contraseña:</label>
            <br></br>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <div className=" flex w-5/12 items-center justify-around">
            <label htmlFor="phone">Teléfono:</label>
            <br></br>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className=" flex w-5/12 items-center justify-around">
            <span></span>
          </div>
          <div className=" flex w-5/12 items-center justify-around">
            <label htmlFor="termsAccepted">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                required
              />
              Acepto los términos y condiciones
            </label>
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
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
export default Registro;
