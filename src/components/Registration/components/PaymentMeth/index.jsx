import React, { useState, useRef } from 'react'
import { ContentBox } from 'components/ContentBox'
import { qrPay } from 'helpers/images'
import { Button } from 'components/Button'
import 'components/Registration/components/InscriptionForm/inscriptionForm.scss'

export const ProofInput = () => {
    const [file, setFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const fileInput = useRef(null)

    const onChange = async e => {
        if (e.target.files && e.target.files.length > 0) {
            console.log('selectFile');
            setFile(e.target.files[0])
            setIsFilePicked(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // const sendFile = file => {
        //     // async + arg
        //     // await api({
        //     //     method: "post",
        //     //     url: "/registred.json",
        //     //     data: registrer,
        //     // });
        // };
        console.log('upload ' + file.name);
    }
    return <>
        <input
            type='file'
            multiple={false}
            name='cargar documento'
            ref={fileInput}
            onChange={onChange}
            style={{ display: 'none' }}
        />

        {
            isFilePicked
                ?
                <>
                    <div className="text-container">
                        <p className="info">
                            Nombre: {file.name}
                        </p>
                        <p className="info">
                            Al verificar la información, se le enviará un correo electrónico para coordinar los datos de facturación
                        </p>
                    </div>
                    <Button
                        text={'enviar'}
                        type={'submit'}
                        onClick={(e) => handleSubmit(e)}
                    />
                </>
                :
                <>
                    <Button
                        text={'cargar archivo'}
                        // className='upload-btn'
                        onClick={() => fileInput.current.click()}
                    />
                </>
        }
    </>
}


const PaymentMeth = () => {
    return (
        <ContentBox
            theme={'ligth inscription'}
            title={'modo de pago'}
            hideDiv={true}
            flowContent={'center'}
        >
            <label className="label-section blue">
                Paso 2 de 2
            </label>
            <div className="text-container">
                <p>
                    Puedes realizar el pago por transferencia bancaria simple o escanear nuestro código QR, luego adjunta tu comprobante bancario
                </p>
            </div>
            <div className="payment-container">
                <div className="qr-container">
                    <img id="QR-Pay" src={qrPay} alt="QR para pago" />
                    <p className="label-payment">
                        Escanea el QR para realizar la transferencia
                    </p>
                </div>
                <div className="info-container">
                    <h4 className="main-info">
                        Banco Unión
                    </h4>
                    <div>
                        <label className="info">
                            Número de cuenta:
                        </label>
                        <p className="main-info">
                            10000033397444 (Bs)
                        </p>
                    </div>
                    <div>
                        <label className="info">
                            A nombre de:
                        </label>
                        <p className="main-info">
                            José Antonio Bedregal Fernández
                        </p>
                        <label className="info">
                            Cuenta corporativa iPAX Studio
                        </label>
                    </div>
                </div>
            </div>
            <div className="receipt-input-file">
                <h4 className="title-input-file">
                    Adjuntar comprobante
                </h4>
                <ProofInput />
            </div>
        </ContentBox>
    )
}

export { PaymentMeth }