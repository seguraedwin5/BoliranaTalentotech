import logo_bolirana from "../assets/logo_bolirana.jpg";
import eventos_bolirana from "../assets/eventos_bolirana.jpg";
import alquiler_bolirana from "../assets/alquiler_bolirana.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function SectionCards() {
  return (
    <div className="App">
      {
        /* <header className="App-header">
          <img src = {logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */
        <main id="section-cards" className=" p-3">
          <h1 className="text-5xl text-center font-bold mt-2 mb-2">
            Servicios
          </h1>
          <section className="second__section ">
            <article>
              <img src={eventos_bolirana} alt="" />
              <h2>Eventos</h2>
              <p>
                Haz que tu evento sea inolvidable con nuestra amplia gama de
                servicios. Déjanos encargarnos de todo para que tú solo
                disfrutes.
              </p>
              <Link to={"/eventos"}>
                <button>View more...</button>
              </Link>
            </article>
            <article>
              <img src={logo_bolirana} alt="" />
              <h2>Campeonatos</h2>
              <p>
                Descubre nuevos desafíos y enfrenta a los mejores en nuestros
                campeonatos. Con premios y reconocimientos, cada victoria será
                un logro inolvidable.
              </p>
              <Link to={"/campeonatos"}>
                <button>View more...</button>
              </Link>
            </article>
            <article>
              <img src={alquiler_bolirana} alt="" />
              <h2>Reservas</h2>
              <p>
                Obtén lo mejor en equipos de alquiler para tu evento. Calidad y
                variedad para satisfacer todas tus necesidades.
              </p>
              <Link to={"/alquiler"}>
                <button>View more...</button>
              </Link>
            </article>
          </section>
        </main>
      }
    </div>
  );
}
export default SectionCards;
