import './Footer.css'
import footer_logo from '../../assets/sun.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>Soy desarrolladora frontend en Colombia</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={footer_logo} alt="" />
                    <input type="email" placeholder='Escriba su email' />
                </div>
                <div className="footer-subscribe">Suscribirse</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2024 Lucy Jiménez. Derechos reservados</p>
            <div className="footer-bottom-right">
                <p>Terminos de servicio</p>
                <p>Politicas de privacidad</p>
                <p>Contactame</p>
            </div>
        </div>
    </div>
  )
}

export default Footer