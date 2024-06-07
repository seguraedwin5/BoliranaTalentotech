import Input from "../components/Input";
import Section from "../components/Section";
import React, { Children, useContext, useState } from "react";
import axios from "axios";
import { SesionDataContext } from "../../Context";

const url = import.meta.env.VITE_API_URL;
function Login() {
  const [sessiondata, Setsessiondata] = useContext(SesionDataContext);
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
    console.log(formData);
    axios
      .post(url + "/users/login", formData)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        Setsessiondata((session) => ({ ...data }));
      })
      .finally(console.log(sessiondata));
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
          </div>
        </form>
      </div>
    </Section>
  );
}
export default Login;
