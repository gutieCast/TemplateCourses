import React from 'react'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { imgForWho, bgMethodology, contMethodology } from 'helpers/images'
import 'components/ForWho/for-who.scss'

const ForWho = () => {
    const { para_quien } = infoCourse
    return (
        <section id="for-who">
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
                    <img className="content-meth" scr={contMethodology} alt="¡Metodología 100% online!" />
                </div>

            </section>
        </section>
    )
}

export { ForWho }
