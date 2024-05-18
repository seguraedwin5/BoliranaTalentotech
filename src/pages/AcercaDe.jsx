  import React from 'react';
  import Section from "../components/Section";
  
function AcercaDe() {
    return (
      <div>
        <h1 className='text-center'>Sobre Nosotros</h1>
  
        <Section>
        <div className="p-5 bg-white shadow-md flex flex-row flex-wrap gap-3 justify-center">
        <div className="w-4/5">
          <h2>Nuestra Historia</h2>
          <p>
            Comenzamos como un pequeño proyecto desarrollado durante un curso full stack que brindo el gobierno llamado <strong>Talento Tech</strong>, con la pasión por el desarrollo web y los conocimientos adquiridos durante el curso hemos creado dichoso trabajo. Desde entonces, hemos crecido y nos hemos convertido en líderes en el alquiler de boliranas y la organización de torneos en nuestra ciudad.
          </p>
          </div>

          <div className="">
          <h2>Nuestros Servicios</h2>
            <li>Alquiler de boliranas de alta calidad</li>º
            <li>Organización de torneos locales y regionales</li>
            <li>Asesoramiento y capacitación para principiantes</li>
            <li>Venta de accesorios y equipamiento para boliranas</li>
          </div>

          <div className=" flex w-4/4 items-center justify-around">
          <h2>Nuestro Equipo</h2>
          <p>
            Contamos con un equipo apasionado y experimentado en el mundo de las boliranas. Nuestros instructores son jugadores profesionales y expertos en la organización de eventos deportivos.
          </p>
          </div>
   
          <div className=" flex w-4/4 items-center justify-around">
          <h2>Misión y Visión</h2>
          <p>
            Nuestra misión es promover el deporte de las boliranas y brindar una experiencia excepcional a nuestros clientes. Nuestra visión es convertirnos en referentes a nivel nacional en el alquiler de boliranas y la organización de torneos.
          </p>
          </div>
          </div>
        </Section>
      </div>
    );
  };
  
  export default AcercaDe;