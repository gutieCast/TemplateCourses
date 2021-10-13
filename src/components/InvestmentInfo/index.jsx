import React from 'react'
import { ContentBox } from '../ContentBox'
import { infoCourse } from '../../helpers/data'
import { Card } from './components/Card'
import { bannerInscription } from '../../helpers/images'
import { Button } from '../Button'
import './investmentInfo.scss'

const InvestmentInfo = () => {
    const { inversion } = infoCourse;

    return (
        <section id="inversion">
            <ContentBox
                theme="ligth"
                title="inversión"
                hideDiv={true}
                flowContent={"center"}
            >
                <ul className="cards-grid">
                    {
                        inversion.map(({ recomended, title, price, label, extraItem, description, optionSelected }) => {
                            return (
                                <li key={title} className="card-item">
                                    <Card
                                        recomended={recomended}
                                        title={title}
                                        price={price}
                                        label={label}
                                        extraItem={extraItem}
                                        description={description}
                                        linkButton={optionSelected}
                                    />
                                </li>

                            )
                        })
                    }

                </ul>
                <div className="banner-container-inscription" style={{ backgroundImage: `url(${bannerInscription})` }}>
                    <h2 className="banner-text"> ¡inscríbete ahora! </h2>
                    <Button classStyle={'btn-dark'} link={`${process.env.PUBLIC_URL}/inscribirse`} anim={'uk-animation-kenburns'} text={'¡Inscríbete!'} />
                </div>

            </ContentBox>
        </section>
    )
}

export { InvestmentInfo }