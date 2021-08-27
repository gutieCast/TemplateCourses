import React from 'react'
import { ContentBox } from '../ContentBox'
import { SlideNav } from '../SlideNav'

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