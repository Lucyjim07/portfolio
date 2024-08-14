import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

const App = () => {
  const logo = "Lucy Jiménez  ";
  const titles = ["Inicio", "Acerca de mi", "Proyectos", "Contacto"];

  const presentation = {
    subtitle: "Hola ...",
    title: `Soy Lucy Jimenez desarrolladora Frontend`,
    description:
      "Bienvenidos a mi portafolio como desarrolladora Frontend. Soy Lucy, una programadora que está iniciando esta nueva etapa con una  fuerte pasión por el diseño y la creación de páginas web llamativas, adaptables y amigables con el usuario.",
    contactBtnTitle: "Contratame",
    portfolioBtnTitle: "Portafolio",
    fotoSrc: "foto.png",
    altFoto: "Foto retrato de Lucy Jimenez, desarrolladora Frontend"
  };

  return (
    <>
      <Navbar logo={logo} titles={titles} />
      <Jumbotron presentation={presentation} />
    </>
  );
};

export default App;
