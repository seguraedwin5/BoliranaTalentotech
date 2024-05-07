import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const { Brand } = Navbar;
const { Item } = Dropdown;

function NavbarComponent() {
  return (
    <Navbar className="bg-gray-100 py-8">
      <Link to={"/"} className="text-gray-600 font-bold mr-4 mb-4 md:mb-0 text-3xl">
        <img src="/public/logo.png" className="mr-5 ml-5 h-16 w-16 sm:h-24 sm:w-24" alt="Logo" />
          Bolirana
      </Link>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" className="text-2xl">Inicio</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/acercade" className="text-2xl">Acerca de:</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/contacto" className="text-2xl">Contacto</Link>
        </Navbar.Link>
        <Dropdown arrowIcon={true} inline label={<span className="text-2xl">Servicios</span>} className="text-2xl">
          <Item className="bg-gray-300">
            <Link to="/campeonatos" className="text-2xl">Campoeonato</Link>
          </Item>
          <Item className="bg-gray-300">
            <Link to="/eventos" className="text-2xl">Eventos</Link>
          </Item>
          <Item className="bg-gray-300">
            <Link to="/alquiler" className="text-2xl">Alquiler</Link>
          </Item>
        </Dropdown>
        <Navbar.Toggle />
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <div className="bg-cyan-500 p-2 mx-1 rounded text-white hover:bg-cyan-700">
        <h4><Link to='/login' className="text-2xl">Login</Link></h4>
        </div>
        <div className="bg-teal-500 p-2 mx-1 rounded text-white hover:bg-teal-700">
        <h4><Link to='/registro' className="text-2xl">Registro</Link></h4>
        </div>
      </div>
    </Navbar>
    
  );
}
export default NavbarComponent;
