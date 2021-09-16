import React from 'react'
import { ContentBox } from '../../components/ContentBox'
import { Form } from '../../components/Form'
import './signIn.scss'

const SignIn = () => {
    return (
        <section id="sign-in">
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

export { SignIn }