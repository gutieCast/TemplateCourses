import React from 'react'
import { ContentBox, SlideNav } from '../../components'

const Teachers = () => {
    return (
        <section id="docentes">
            <ContentBox
                hideDiv={true}
                theme={'ligth'}
                title={'Docentes'}
                flowContent={'center'}>
                <SlideNav teachers={true} />
            </ContentBox>
        </section>
    )
}

export { Teachers }