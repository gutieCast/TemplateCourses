import React from 'react'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { Card } from 'components/InvestmentInfo/components/Card'
import { bannerInscription } from 'helpers/images'
import { Button } from 'components/Button'
import 'components/InvestmentInfo/investmentInfo.scss'

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
                                <li>
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
                    <Button classStyle={'btn-dark'} link="/inscribirse/" anim={'uk-animation-kenburns'} text={'¡Inscríbete!'} />
                </div>

            </ContentBox>
        </section>
    )
}

export { InvestmentInfo }