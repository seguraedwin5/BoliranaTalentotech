import logo_bolirana from '../assets/logo_bolirana.jpg'
import eventos_bolirana from '../assets/eventos_bolirana.jpg'
import alquiler_bolirana from '../assets/alquiler_bolirana.jpg'
import '../App.css';
function SectionCards() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        <main>
        <section className="second__section">
        <article>
          <img src={eventos_bolirana} alt="" />
          <h2>EVENTOS</h2>
          <p>
            Haz que tu evento sea inolvidable con nuestra amplia gama de
            servicios. Déjanos encargarnos de todo para que tú solo disfrutes.
          </p>
          <button>View more...</button>
        </article>
        <article>
          <img src={logo_bolirana} alt="" />
          <h2>CAMPEONATOS</h2>
          <p>
            Descubre nuevos desafíos y enfrenta a los mejores en nuestros
            campeonatos. Con premios y reconocimientos, cada victoria será un
            logro inolvidable.
          </p>
          <button>View more...</button>
        </article>
        <article>
          <img src={alquiler_bolirana} alt="" />
          <h2>RESERVAS</h2>
          <p>
            Obtén lo mejor en equipos de alquiler para tu evento. Calidad y
            variedad para satisfacer todas tus necesidades.
          </p>
          <button>View more...</button>
        </article>
      </section>
      </main>}
      </div>
    );
  }
  export default SectionCards;