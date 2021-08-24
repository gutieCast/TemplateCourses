import React from 'react'
import { imgAboutCourse } from 'helpers/images'
import { imgSolution } from 'helpers/images'
import { ContentBox } from 'components/ContentBox'
import { infoCourse } from 'helpers/data'
import { Link } from 'react-router-dom'
import 'components/AboutCourse/aboutCourse.scss'

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
                <Link
                    className="PDF-downloader"
                    to={process.env.PUBLIC_URL + '/files/informacion-sobre-rescat.pdf'} target="_blank" download>
                    Descargar pdf
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