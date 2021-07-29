import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { validations } from 'components/Registration/components/InscriptionForm/validations'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import 'components/Registration/components/inscriptionForm.scss'
import { ContentBox } from 'components'

const InscriptionForm = ({ defaultOption, selectOption1, selectOption2, selectOption3 }) => {

    /////////////////////////////////////////////////////VALIDATIONS

    const { errors, validateName, validateLastname, validateEmail, validatePhone, validateProfession, validateOrganization, validatePaymentModality } = validations

    console.log(errors);

    /////////////////////////////////////////////////USE STATES & REGISTRER FUNCTIONS

    const firstRender = useRef(true);

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [profession, setProfession] = useState('');
    const [organization, setOrganization] = useState('');
    const [paymentModality, setPaymentModality] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [goPay, setGoPay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const sendRegistrer = (name, lastname, email, phone, profession, organization, paymentModality) => {
        //     // async + arg
        //     // await api({
        //     //     method: "post",
        //     //     url: "/prerregistres.json",
        //     //     data: registrer,
        //     // });
        // };
        console.log('registred: ', name, lastname, email, phone, profession, organization, paymentModality);
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        setProfession('');
        setOrganization('');
        setPaymentModality('');
        firstRender.current = true
        setGoPay(true)
    }


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setIsDisabled(pendingErrors(errors))
    }, [name, lastname, email, phone, profession, organization, paymentModality]);

    const pendingErrors = (errors) => {
        if (
            (name === '' || lastname === '' || email === '' || phone === '' || profession === '' || organization === '' || paymentModality === '')
        ) {
            return true
        } else {
            for (let key in errors) {
                if (errors[key] !== null && errors[key] !== "") {
                    return true
                } else {
                    errors = {}
                    return false
                }
            }
        }
    };

    return (
        <>
            {goPay && (<Redirect to="/modo-de-pago" />)}
            <section id="registrer-form inscription">
                <ContentBox
                    theme={'dark'}
                    title={'registro'}
                    hideDiv={true}
                    flowContent={'center'}
                >
                    <label className="label-section">
                        Paso 1 de 2
                    </label>
                    <form className="form-registrer" onSubmit={handleSubmit}>
                        <fieldset className="uk-fieldset" >

                            <div className="uk-margin">
                                <input className="uk-input" name="name" id="name" type="text" placeholder="*Nombre" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => validateName(e.target.value)} />
                                {errors.name !== '' ? <span>{errors.name}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="lastname" id="lastname" type="text" placeholder="*Apellido" value={lastname} onChange={(e) => setLastname(e.target.value)} onBlur={(e) => validateLastname(e.target.value)} />
                                {errors.lastname !== '' ? <span>{errors.lastname}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="email" id="email" type="email" placeholder="*Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} />
                                {errors.email !== '' ? <span>{errors.email}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <PhoneInput withCountryCallingCode={false} defaultCountry="BO" international={true} className="uk-input input-phone" placeholder="Número celular" name="phone" id="phone" type="text" value={phone} onChange={setPhone} onBlur={() => validatePhone(phone)} />
                                {errors.phone !== '' ? <span>{errors.phone}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="profession" id="profession" type="text" placeholder="*Profesión" value={profession} onChange={(e) => setProfession(e.target.value)} onBlur={(e) => validateProfession(e.target.value)} />
                                {errors.profession !== '' ? <span>{errors.profession}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="organization" id="organization" type="text" placeholder="*Empresa" value={organization} onChange={(e) => setOrganization(e.target.value)} onBlur={(e) => validateOrganization(e.target.value)} />
                                {errors.organization !== '' ? <span>{errors.organization}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <select className="payment-modality" name="payment-modality" id="payment-modality" value={paymentModality} onChange={(e) => setPaymentModality(e.target.value)} onBlur={(e) => validatePaymentModality(e.target.value)}>
                                    <option selected={defaultOption ? "selected" : ''} value={''}>--Escoge tu paquete--</option>
                                    <option selected={selectOption1 ? "selected" : ''} value="1 módulo">1 Módulo (500 Bs.)</option>
                                    <option selected={selectOption2 ? "selected" : ''} value="4 módulos">4 Módulos (1600 Bs.)</option>
                                    <option selected={selectOption3 ? "selected" : ''} value="12 módulos">12 Módulos (3500 Bs.)</option>
                                </select>
                                {errors.paymentModality !== '' ? <span>{errors.paymentModality}</span> : ''}
                            </div>
                        </fieldset>
                        <button className="form-submit" disabled={isDisabled ? 'disabled' : ''} type='submit' onClick={(e) => handleSubmit(e)}>Inscribirse</button>
                    </form >
                </ContentBox>
            </section>
        </>
    )
}

export { InscriptionForm }