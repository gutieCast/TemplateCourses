import React from 'react'
import { ContentBox } from 'components/ContentBox'
import { SlideNav } from 'components/SlideNav'

const Modules = () => {
    return (
        <section id="modulos">
            <ContentBox
                hideDiv={true}
                theme={'ligth'}
                title={'Módulos'}
                flowContent={'center'}>
                <SlideNav modules={true} />
            </ContentBox>
        </section>
    )
}

export { Modules }