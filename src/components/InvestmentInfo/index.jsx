import React from 'react'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { Card } from 'components/InvestmentInfo/components/Card'
import 'components/InvestmentInfo/investmentInfo.scss'

const InvestmentInfo = () => {
    const { inversion } = infoCourse;
    return (
        <section id="investment-info">
            <ContentBox
                theme="ligth"
                title="inversión"
                hideDiv={true}
                flowContent={"center"}
            >
                <div className="cards-container">
                    {
                        inversion.map((plan) => {
                            return (
                                <Card
                                    recomended={plan.recomended}
                                    title={plan.title}
                                    price={plan.price}
                                    label={plan.label}
                                    extraItem={plan.extraItem}
                                    description={plan.description}
                                />
                            )
                        })
                    }

                </div>
            </ContentBox>
        </section>
    )
}

export { InvestmentInfo }