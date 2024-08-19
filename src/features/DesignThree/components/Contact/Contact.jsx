import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Contactame</h1>
            {/* <img src="   " alt="" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Hablemos</h1>
                <p>Estoy disponible para participar en proyectos nuevos, así que sientete libre de escribir.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>sample@email.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>+57 555-123-1278</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>Colombia</p>
                    </div>
                </div>
            </div>
            <form action="" className='contact-right'>
                <label htmlFor="name">Tu nombre</label>
                <input type="text" placeholder='Ingresa tu nombre' name='name' />
                <label htmlFor="email">Tu correo electrónico</label>
                <input type="email" placeholder='Ingresa tu email' name='email'/>
                <label htmlFor="message">Escribe tu mensaje aquí</label>
                <textarea name="message" rows="8" placeholder='Ingresa tu mensaje'></textarea>
                <button type='submit' className="contact-submit">Enviar ahora</button>
            </form>
        </div>
    </div>
  )
}

export default Contact