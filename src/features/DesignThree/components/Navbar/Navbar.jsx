import './Navbar.css'
import logo from '../../assets/sun.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Inicio</li>
        <li>Acerca de mi</li>
        <li>Servicios</li>
        <li>Portafolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Contactame</div>
    </div>
  )
}

export default Navbar