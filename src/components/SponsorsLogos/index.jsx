import React from 'react'
import { logos } from '../../helpers/images'
import './sponsorsLogos.scss'

const SponsorsLogos = () => {
    return (
        <div className="grid-container">
            <ul className="grid-collaborators"
                // uk-scrollspy="cls:uk-animation-slide-bottom-small; target: .logo-collab; repeat: true"
                uk-parallax="target: .logo-collab; opacity: 0, 1; y: 55,0; viewport: 0.5; easing: 1; repeat: true"
            >
                {
                    logos.map(({ title, src, id }) => {
                        return (
                            <li className="logo-collab-item"
                                key={src}
                            >
                                <img id={id} className="logo-collab" src={src} title="title" alt={title} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export { SponsorsLogos }