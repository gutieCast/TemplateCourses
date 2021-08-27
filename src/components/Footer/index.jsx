import React from 'react'
import { logoWhite } from '../../helpers/images'
import { SponsorsLogos } from '../SponsorsLogos'
import Menu from '../Menu'
import './footer.scss'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="logo-container-footer" style={{ backgroundColor: '#7070707' }}>
                <img src={logoWhite} alt="RESCAT logo" />
            </div>
            <Menu styleName="menu-footer" styleAnimation={"uk-animation-scale-down"} />
            <div className="contact-info-footer">
                <div className="WA-container">
                    <a href="https://wa.me/message/DBMZAWA4V27CA1"
                        className="link-WA"
                        uk-scrollspy="cls:uk-animation-slide-bottom-small; repeat: true"
                    >
                        <span className="uk-icon-link iconWA"
                            uk-icon={`icon: whatsapp; ratio: ${window.innerWidth > 768 ? 2 : 1}`}></span>
                        <span className="number">(+591) 76301026</span>
                    </a>
                </div>
                <div className="social-media-container-footer"
                    uk-scrollspy="cls:uk-animation-slide-bottom-small; target: .social-media-item-footer; repeat: true"
                >
                    <p className="social-media-text-footer">
                        Síguenos en:
                    </p>
                    <ul className="social-media-list-footer">
                        <li className="social-media-item-footer">
                            <a href="https://www.facebook.com/ipaxstudiosc" className="uk-animation-scale-down uk-icon-link link-sm-footer" uk-icon={`icon: facebook; ratio: ${window.innerWidth > 768 ? 2 : 1}`}>
                            </a>
                        </li>
                        <li className="social-media-item-footer">
                            <a href="https://www.instagram.com/ipaxstudio/?hl=es-la" className="uk-animation-scale-down uk-icon-link link-sm-footer" uk-icon={`icon: instagram; ratio: ${window.innerWidth > 768 ? 2 : 1}`}>
                            </a>
                        </li>
                        <li className="social-media-item-footer">
                            <a href="https://www.linkedin.com/company/ipaxstudio" className="uk-animation-scale-down uk-icon-link link-sm-footer" uk-icon={`icon: linkedin; ratio: ${window.innerWidth > 768 ? 2 : 1}`}>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <SponsorsLogos />
        </footer>
    )
}

export { Footer }
