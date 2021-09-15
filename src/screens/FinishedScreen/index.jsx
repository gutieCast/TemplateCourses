import React from 'react'
import { ContentBox } from '../../components/ContentBox'
import { Button } from '../../components/Button'
import { logoWhite } from '../../helpers/images'
import { infoCourse } from '../../helpers/data'
import './finishedPage.scss'

const FinishedScreen = () => {
    const { nameCourse } = infoCourse

    return (
        <section id="finished-page">
            <ContentBox
                theme={'dark inscription'}
                title={'¡Inscripción realizada!'}
                hideDiv={true}
                flowContent={'center'}
            >
                <div className="logo-container">
                    <img src={logoWhite} alt={`logo ${nameCourse}`} />
                </div>
                <div className="text-container">
                    <p className="text-dark">
                        Has finalizado el proceso de inscripción
                        <br />
                        Pronto te escribiremos al correo
                    </p>
                </div>
                <Button classStyle={"btn-dark"} text={"¡Ok!"} link={`${process.env.PUBLIC_URL}/#acerca-de`} />
            </ContentBox>
        </section>
    )
}

export { FinishedScreen }