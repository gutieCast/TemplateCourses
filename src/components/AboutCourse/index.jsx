import React from 'react'
import { imgAboutCourse } from 'helpers/images'
import { imgSolution } from 'helpers/images'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { Link } from 'react-router-dom'

const AboutCourse = () => {
    const { abrev, acerca_de, solution } = infoCourse
    return (
        <section id='acerca-de'>
            <ContentBox
                theme={'light'}
                title={`Sobre ${abrev}`}
                imgRoute={imgAboutCourse}
                body={acerca_de}
                flowContent={'normal'}>
                <Link to={process.env.PUBLIC_URL + '/files/informacion-sobre-rescat.pdf'} target="_blank" download>Descargar pdf
                </Link>
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