import React, { useState, useEffect, useRef } from 'react'
import { ContentBox } from '../../components/ContentBox'
import { Form } from '../../components/Form'

import './inscriptionForm.scss'

const InscriptionForm = () => {
    return (
        <section id="register">
            <ContentBox
                theme={'dark'}
                title={'registro'}
                hideDiv={true}
                flowContent={'center'}
            >
                <label className="label-section">
                    Paso 1 de 2
                </label>

                <Form signIn={true} />

            </ContentBox>
        </section>
    )
}

export { InscriptionForm }