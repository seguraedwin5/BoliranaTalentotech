import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SesionDataContext } from "../../Context";
import { data } from "autoprefixer";
import logo from "../assets/logo.png";

const { Brand } = Navbar;
const { Item } = Dropdown;

function NavbarComponent() {
  const [sessiondata, Setsessiondata] = useContext(SesionDataContext);
  const navigate = useNavigate();

  function handleLogout() {
    Setsessiondata({ data: null });
    navigate("/");
  }
  if (sessiondata.email != null) {
    return (
      <Navbar className="bg-gray-100 py-8">
        <Navbar.Brand as={Link}>
          <div className="flex flex-row justify-center items-center">
            <img
              src={logo}
              className="mr-5 ml-5 h-16 w-16 sm:h-24 sm:w-24"
              alt="Logo"
            />
            <h2>Bolirana</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/" className="text-2xl">
              Inicio
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/acercade" className="text-2xl">
              Acerca de:
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/combos" className="text-2xl">
              Combos
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/equipos" className="text-2xl">
              Equipos
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/pagos" className="text-2xl">
              Pagos
            </Link>
          </Navbar.Link>
          <Dropdown
            arrowIcon={true}
            inline
            label={<span className="text-2xl">Servicios</span>}
            className="text-2xl"
          >
            <Item className="bg-gray-300">
              <Link to="/campeonatos" className="text-2xl">
                Campoeonato
              </Link>
            </Item>
            <Item className="bg-gray-300">
              <Link to="/eventos" className="text-2xl">
                Eventos
              </Link>
            </Item>
            <Item className="bg-gray-300">
              <Link to="/alquiler" className="text-2xl">
                Alquiler
              </Link>
            </Item>
          </Dropdown>
          <Navbar.Toggle />
        </Navbar.Collapse>
        <div className="flex md:order-2">
          <div className="bg-cyan-500 p-2 mx-1 rounded text-white hover:bg-cyan-700">
            <h4>
              <button
                className="text-2xl"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            </h4>
          </div>
        </div>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="bg-gray-100 py-8">
        <Navbar.Brand as={Link}>
          <div className="flex flex-row justify-center items-center">
            <img
              src="/public/logo.png"
              className="mr-5 ml-5 h-16 w-16 sm:h-24 sm:w-24"
              alt="Logo"
            />
            <h2>Bolirana</h2>
          </div>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <div className="bg-cyan-500 p-2 mx-1 rounded text-white hover:bg-cyan-700">
            <h4>
              <Link to="/login" className="text-2xl">
                Login
              </Link>
            </h4>
          </div>
          <div className="bg-teal-500 p-2 mx-1 rounded text-white hover:bg-teal-700">
            <h4>
              <Link to="/registro" className="text-2xl">
                Registro
              </Link>
            </h4>
          </div>
        </div>
      </Navbar>
    );
  }
}
export default NavbarComponent;
