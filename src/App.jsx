import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#">Lucy</a>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" name="check" id="check" />

          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de mi</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="section">
        <div className="section-container">
          <div className="content">
            <p className="subtitle">HOLA ...</p>
            <h1 className="title">
              Soy <span>Lucy Jimenez</span> desarrolladora Frontend
            </h1>
            <p className="description">
              Bienvenidos a mi portafolio como desarrolladora Frontend. Soy
              Lucy, una programadora que está iniciando esta nueva etapa con una
              fuerte pasión por el diseño y la creación de páginas web
              llamativas, adaptables y amigables con el usuario.
            </p>
            <div className="action-btns">
              <button className="primary-btn">Contratame</button>
              <button className="secondary-btn">Portafolio</button>
            </div>
          </div>
          <div className="image">
            <img
              src="foto.png"
              alt="Foto retrato de Lucy Jimenez, desarrolladora Frontend"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
