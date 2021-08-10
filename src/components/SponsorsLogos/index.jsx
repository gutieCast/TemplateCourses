import React from 'react'
import { logos } from 'helpers/images.js'
import 'components/SponsorsLogos/sponsorsLogos.scss'

const SponsorsLogos = () => {
    return (
        <div className="grid-container">
        <ul className="grid-collaborators">
            {
                logos.map(({ title, src, id }) => {
                    return (
                        <li className="logo-collab-item" valueParallax="target: #hero; opacity: 0, 1; scale: 1.25; y: 0,25; viewport: 0.5; easing: -1" key={src}>
                            <img id={id} className="logo-collab" src={src} title="title" alt={title} />
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}

export {SponsorsLogos}