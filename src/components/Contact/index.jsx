import React from 'react'
import { ContentBox } from 'components/ContentBox'
import { qrWA } from 'helpers/images'
import { ContactForm } from './components/ContactForm'
import 'components/Contact/contact.scss'

const Contact = () => {
    return (
        <section id="contact">
            <ContentBox
                theme={'ligth'}
                title={'Contacto'}
                hideDiv={true}
            >
                <div className="headline">
                    <p className="headline-text">
                        ¿Deseas más información
                        <br />
                        Déjanos tu contacto y nos comunicaremos contigo.
                    </p>
                </div>
                <div className="contact-container">

                    <div className="contact-links">
                        <div className="qr-container">
                            <img id="QR-WA" src={qrWA} alt="QR code for WhatsApp" />
                            <p className="label-qr-contact">
                                ¡Escanea para contactar por WhatsApp!
                            </p>
                        </div>
                        <div className="social-media-container">
                            <p className="social-media-text">
                                Síguenos en:
                            </p>
                            <ul className="social-media-list">
                                <li className="social-media-item">
                                    <a href="https://www.facebook.com/ipaxstudiosc" className="uk-animation-scale-down uk-icon-button link-sm" uk-icon="facebook" ratio="2">
                                    </a>
                                </li>
                                <li className="social-media-item">
                                    <a href="https://www.instagram.com/ipaxstudio/?hl=es-la" className="uk-animation-scale-down uk-icon-button link-sm" uk-icon="instagram" ratio="2">
                                    </a>
                                </li>
                                <li className="social-media-item">
                                    <a href="https://www.linkedin.com/company/ipaxstudio" className="uk-animation-scale-down uk-icon-button link-sm" uk-icon="linkedin" ratio="2">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-container">
                        <ContactForm />
                    </div>
                    
                </div>
            </ContentBox>
        </section >
    )
}

export { Contact }