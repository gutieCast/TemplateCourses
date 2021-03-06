import React from 'react'
import { infoCourse } from '../../helpers/data'
import { imgHero } from '../../helpers/images'
import { Button } from '../Button'
import { SponsorsLogos } from '../SponsorsLogos'
import './hero.scss'

const Hero = () => {
    const { nameCourse } = infoCourse
    return (
        <div id="hero">
            <div className="img-hero" style={{ backgroundImage: `url(${imgHero})` }}>
                <div className="name-container">
                    <h1 className="uk-text-center uk-margin-auto uk-margin-auto-vertical"
                        uk-parallax="target: #hero; opacity: 1, 0; y: 400; easing: -2"
                        id="text-hero">
                        {
                            nameCourse.map(fragName => {
                                return (
                                    <p style={{ margin: '0' }} key={fragName}>{fragName}</p>
                                )
                            })
                        }
                    </h1>
                </div>
                <div className="container-hero">
                    <Button classStyle={'logo-box hero'} link={`${process.env.PUBLIC_URL}/inscribirse`}
                        text={'¡Inscríbete!'} />
                    <SponsorsLogos />
                </div>
            </div>
        </div>
    )
}

export { Hero }