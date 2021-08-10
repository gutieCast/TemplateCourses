import React from 'react'
import {logoFooter} from 'helpers/images'
import { SponsorsLogos } from 'components/SponsorsLogos'
import { MainMenu } from 'components/Header/components/Menu/components/MainMenu'
import 'components/Footer/footer.scss'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="logo-container-footer" style={ {backgroundColor: '#7070707' } }>
                <img src={logoFooter} alt="RESCAT logo" />
            </div>
            <MainMenu styleAnimation={"uk-animation-scale-down"} /> 
            <div className="contact-info-footer">
                <div className="WA-container">
                    <a href="https://wa.me/message/DBMZAWA4V27CA1" className="uk-animation-scale-down uk-icon-button link-footer" uk-icon="whastapp" ratio="2"></a>
                </div>
            </div>
            <SponsorsLogos />         
        </footer>
    )
}

export {Footer}
