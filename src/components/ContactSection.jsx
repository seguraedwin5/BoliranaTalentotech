import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import Section from "./Section";

function ContactSection() {
  return (
    <Section>
      <MapContainer></MapContainer>
      <div className="relative w-full h-full bg-gray-300 p-10 my-3 content-center">
        <ul>
          <li>
            <Link to="/" className="text-2xl">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="http://wa.me/+573210001100" className="text-2xl">
              Telefono: (57) - 321-0001100
            </Link>
          </li>
          <li>
            <Link
              to="mailto:bolirana-talento-tech@mail.com"
              className="text-2xl"
            >
              Correo: bolirana-talento-tech@mail.com
            </Link>
          </li>
          <li>
            <Link to="/acercade" className="text-2xl">
              Acerca de nosotros
            </Link>
          </li>
          <li>
            <Link to="/registro" className="text-2xl">
              Registro
            </Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default ContactSection;
