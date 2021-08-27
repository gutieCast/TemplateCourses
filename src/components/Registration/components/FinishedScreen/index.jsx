import React from 'react'
import { ContentBox } from '../../../ContentBox'
import { Button } from '../../../Button'
import { logoWhite } from '../../../../helpers/images'
import { infoCourse } from '../../../../helpers/data'
import '../inscription.scss'

const FinishedScreen = () => {
    const { nameCourse } = infoCourse

    return (
        <ContentBox
            theme={'dark inscription'}
            title={'¡Inscripción realizada!'}
            hideDiv={true}
            flowContent={'center'}
        >

            <div className="text-container">
                <p>
                    Has finalizado el proceso de ¡Inscripción
                    <br />
                    Pronto te escribiremos al correo
                </p>
            </div>
            <div className="logo-container">
                <img src={logoWhite} alt={`logo ${nameCourse}`} />
            </div>
            <Button classStyle="dark" text={"¡Ok!"} link={`${process.env.PUBLIC_URL}/`} />
        </ContentBox>
    )
}

export { FinishedScreen }