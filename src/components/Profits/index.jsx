import React from 'react'
import { infoCourse } from 'helpers/data'
import { ContentBox } from 'components/ContentBox'
import { iconProfit } from 'helpers/images/'
import 'components/Profits/profits.scss'

const Profits = () => {
    const { beneficios } = infoCourse
    return (
        <section id="beneficios">
            <ContentBox
                theme={'ligth'}
                hideDiv={true}
                title={'Beneficios'}
                flowContent={'center'}
            >
                <div className="profits-content">
                    <ul className="grid-profits"
                        uk-scrollspy={`cls: uk-animation-fade; target: .profit; delay: ${window.innerWidth <= 481 ? 50 : 100}; repeat: true; y: -50,50,5,-5`}
                    >
                        {
                            beneficios.map(({ title, body }) => {
                                return (
                                    <li className="profit">
                                        <img className="icon-profit" src={iconProfit} alt="medal icon" />
                                        <h3 className="title-profit">{title}</h3>
                                        <p className="text-profit">{body}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </ContentBox>
        </section>
    )
}

export { Profits }
