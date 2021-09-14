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
            <div>
                <div className="text-container">
                    <p className="text-dark">
                        Has finalizado el proceso de inscripción
                        <br />
                        Pronto te escribiremos al correo
                    </p>
                </div>
                {/* <div className="logo-container">
                    <img src={logoWhite} alt={`logo ${nameCourse}`} />
                </div> */}
                <Button classStyle={"btn-dark"} text={"¡Ok!"} link={`${process.env.PUBLIC_URL}/#acerca-de`} />
            </div>
        </ContentBox>
    )
}

export { FinishedScreen }