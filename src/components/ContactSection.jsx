import MapContainer from "./MapContainer";
import Section from "./Section";

function ContactSection() {
  return (
    <Section>
      <MapContainer></MapContainer>
      <div className="relative w-full h-full bg-white">
        <ul>
          <li>Contacto</li>
          <li>Telefono</li>
          <li>Correo</li>
          <li>Acceso a nuestro chat</li>
          <li>Acerca de nosotros</li>
          <li>Registro</li>
        </ul>
      </div>
    </Section>
  );
}

export default ContactSection;
