import React from 'react'
import { infoCourse } from 'helpers/data'
import { imgHero } from 'helpers/images'
import { Button } from 'components/Button'
import { logos } from 'helpers/images.js'
import 'components/Home/components/Hero/hero.scss'

const Hero = () => {
    const { nameCourse } = infoCourse
    return (
        <div id="hero" >
            <div className="img-hero" style={{ backgroundImage: `url(${imgHero})` }}>
                <div className="name-container">
                    <h1 className="uk-text-center uk-margin-auto uk-margin-auto-vertical"
                        uk-parallax="target: #hero; opacity: 1, 0; y: 400; easing: -2"
                        id="text-hero">
                        {nameCourse}
                    </h1>
                </div>
                <Button classStyle={'logo-box hero'} link="/inscribirse/" anim={'uk-animation-kenburns'} text={'¡Inscríbete!'} />
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
            </div>
        </div>
    )
}

export { Hero }