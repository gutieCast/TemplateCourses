import React from 'react'
import { infoCourse } from 'helpers/data'
import { imgHero } from 'helpers/images'
import { Button } from 'components/Button'
import { SponsorsLogos } from 'components/SponsorsLogos'
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
                <SponsorsLogos />
            </div>
        </div>
    )
}

export { Hero }