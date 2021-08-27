import React from 'react'
import { ContentBox } from '../ContentBox'
import { infoCourse } from '../../helpers/data'
import { imgForWho, bgMethodology, methodology } from '../../helpers/images'
import './for-who.scss'

const ForWho = () => {
    const { para_quien } = infoCourse
    return (
        <section id="para-quien">
            {
                window.innerWidth < 768
                    ?
                    <ContentBox
                        theme={'ligth'}
                        title={'¿Para quién?'}
                        imgRoute={imgForWho}
                        body={para_quien}
                        flowContent={'normal'}>
                        <div className="bg-color"></div>
                    </ContentBox>
                    :
                    <ContentBox
                        theme={'ligth'}
                        title={'¿Para quién?'}
                        imgRoute={imgForWho}
                        body={para_quien}
                        flowContent={'normal'}>
                    </ContentBox>
            }
            <section id="methodology">
                <div id="banner-meth" style={{ backgroundImage: `url(${bgMethodology})` }}>
                    <div className="message-container">
                        <div className="img-methodology" style={{ backgroundImage: `url(${methodology})` }}></div>
                    </div>
                    {/* <img className="img-methodology" scr={methodology} alt="¡Metodología 100% online!" /> */}
                </div>
            </section>
        </section>
    )
}

export { ForWho }
