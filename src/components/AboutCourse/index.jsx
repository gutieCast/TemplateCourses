import React from 'react'
import { imgAboutCourse } from 'helpers/images'
import { imgSolution } from 'helpers/images'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { Button } from 'components/Button'

const AboutCourse = () => {
    const { abrev, acerca_de, solution } = infoCourse
    return (
        <section id='about-course'>
            <ContentBox
                theme={'light'}
                title={`Sobre ${abrev}`}
                imgRoute={imgAboutCourse}
                body={acerca_de}
                flowContent={'normal'}>
                <Button classStyle={'PDF-downloader'}
                    link={process.env.PUBLIC_URL + '/files/guia_educación_sexual.pdf'} text={'descargar pdf'}
                />
            </ContentBox>
            <ContentBox
                theme={'dark'}
                title={'Solución'}
                imgRoute={imgSolution}
                body={solution}
                flowContent={'rev'}
            />
        </section>
    )
}

export { AboutCourse }