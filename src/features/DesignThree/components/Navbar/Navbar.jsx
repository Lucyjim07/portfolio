import "./Navbar.css";
import logo from "../../assets/sun.svg";
import underline from "../../assets/sun.svg";
import menu_open from '../../assets/sun.svg'
import menu_close from '../../assets/moon.svg'
import { useRef, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right="0"
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }


  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <a href="#home" className="anchor-link">
            <p onClick={() => setMenu("home")}>Inicio</p>
          </a>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#about" className="anchor-link">
            <p onClick={() => setMenu("about")}>Acerca de mi</p>
          </a>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#services" className="anchor-link">
            <p onClick={() => setMenu("services")}>Servicios</p>
          </a>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#work" className="anchor-link">
            <p onClick={() => setMenu("work")}>Portafolio</p>
          </a>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <a href="#contact" className="anchor-link">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </a>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <a href="#contact" className="anchor-link">
          Contactame
        </a>
      </div>
    </div>
  );
};

export default Navbar;
