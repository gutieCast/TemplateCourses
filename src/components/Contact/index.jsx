import React from 'react'
import { ContentBox } from 'components/ContentBox'

const Contact = () => {
    return (
        <section id="Contact">
            <ContentBox
                theme={light}
                title={'Contacto'}
                hideDiv={true}
            >
                <div className="headline">
                    <p className="body-section">
                        ¿Deseas más información
                    </p>
                    <p className="body-section">
                        Déjanos tu contacto y nos comunicaremos contigo.
                    </p>
                </div>

                <div className="qr-content">

                </div>
            </ContentBox>
        </section>
    )
}

export { Contact }