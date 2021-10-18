import React from 'react'
import { logos } from '../../helpers/images'
import './sponsorsLogos.scss'

const SponsorsLogos = () => {
    return (
        <div className="grid-container">
            <ul className="grid-collaborators"
                uk-parallax="opacity: 0, 1; y: 100, 0; repeat: true; viewport: 0.7"
            >
                {
                    logos.map(({ title, src, id }) => {
                        return (
                            <li className="logo-collab-item"
                                key={title}
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