import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router'
import PhoneInput from 'react-phone-number-input'
import { Button } from '../Button'
import { validations } from '../../helpers/validations'
import 'react-phone-number-input/style.css'
import './form.scss'

const Form = ({ signIn }) => {
    /////////////////////////////////////////////////////VALIDATIONS FROM HELPERS

    const { errors, validateName, validateLastname, validateEmail, validatePhone, validateProfession, validateOrganization, validatePaymentModality, validateSubject, validateMessage } = validations

    const firstRender = useRef(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [organization, setOrganization] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)

    /////////////////////////////////////////////////USE HOOKS & SIGN IN FUNCTIONS

    const [lastname, setLastname] = useState('');
    const [profession, setProfession] = useState('');
    const [paymentModality, setPaymentModality] = useState(sessionStorage.getItem("option"))
    const [goPay, setGoPay] = useState(false);

    const options = [
        { value: 'sistema-modular', title: '1 módulo (Bs. 500)' },
        { value: 'sistema-tetramodular', title: '4 módulos (Bs. 1600)' },
        { value: 'diplomado-completo', title: '12 módulos (Bs. 3500)' }
    ];

    const data = { name, lastname, email, phone, profession, organization, paymentModality };

    const sendDataInscription = (data) => {
        fetch("/preregistro.php", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };

    const handleSubmitSignIn = (e) => {
        e.preventDefault();
        sendDataInscription(data)
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

    const handleInput = (e, validate, set) => {
        validate(e.target.value);
        set(e.target.value);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        if (name !== '' && lastname !== '' && email !== '' && phone !== '' && organization !== '' && profession !== '' && (paymentModality !== null && paymentModality !== '-- Escoje tu paquete --')) {
            setIsDisabled(AreErrors(errors))
        }
    }, [name, lastname, email, phone, profession, organization, paymentModality]);

    const AreErrors = (errors) => {
        let count = 0;
        const valuesErrors = Object.values(errors)
        for (let value of valuesErrors) {
            if (value !== "") {
                console.log('error: ' + value);
                count += 1
            }
        }
        if (count > 0) {
            return true
        } else {
            return false
        }
    };

    /////////////////////////////////////////////////USE HOOKS & CONTACT FUNCTIONS

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const msg = { name, email, phone, organization, subject, message };

    const sendMessage = (msg) => {
        fetch("/preregistro.php", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(msg)
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();
        sendMessage(msg)
        setIsDisabled(true);
        setName('');
        setEmail('');
        setPhone('');
        setOrganization('');
        setSubject('');
        setMessage('');
        firstRender.current = true
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        if (name !== '' && email !== '' && phone !== '' && organization !== '' && subject !== '' && message !== '') {
            setIsDisabled(AreErrors(errors))
        }
    }, [name, email, phone, organization, subject, message]);

    return (
        <>
            {goPay && (<Redirect to={`${process.env.PUBLIC_URL}/modo-de-pago`} />)}
            <form className={signIn ? 'sign-form' : 'contact-form'} onSubmit={signIn ? handleSubmitSignIn : handleSubmitContact}>
                <fieldset className="uk-fieldset fieldset" >
                    {
                        signIn &&
                        <>
                            <div className="uk-margin">
                                <input className="uk-input" name="name" id="name" type="text" placeholder="*Nombre" value={name} onChange={(e) => handleInput(e, validateName, setName)} />
                                {errors.name !== '' ? <span>{errors.name}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="lastname" id="lastname" type="text" placeholder="*Apellido" value={lastname} onChange={(e) => handleInput(e, validateLastname, setLastname)} />
                                {errors.lastname !== '' ? <span>{errors.lastname}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="email" id="email" type="email" placeholder="*Correo Electrónico" value={email} onChange={(e) => handleInput(e, validateEmail, setEmail)} />
                                {errors.email !== '' ? <span>{errors.email}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <PhoneInput withCountryCallingCode={false} defaultCountry="BO" international={true} className="uk-input input-phone" placeholder="Número celular" name="phone" id="phone" type="text" value={phone} onChange={setPhone} onBlur={() => validatePhone(phone)} />
                                {errors.phone !== '' ? <span>{errors.phone}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="profession" id="profession" type="text" placeholder="*Profesión" value={profession} onChange={(e) => handleInput(e, validateProfession, setProfession)} />
                                {errors.profession !== '' ? <span>{errors.profession}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="organization" id="organization" type="text" placeholder="*Empresa" value={organization} onChange={(e) => handleInput(e, validateOrganization, setOrganization)} />
                                {errors.organization !== '' ? <span>{errors.organization}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <select className="payment-modality" name="payment-modality" id="payment-modality" value={paymentModality} onChange={(e) => setPaymentModality(e.target.value)} onBlur={() => validatePaymentModality}
                                >
                                    <option defaultValue=""> -- Escoje tu paquete -- </option>
                                    {
                                        options.map(option => {
                                            return (
                                                <option value={option.value} selected={paymentModality === option.value ? 'true' : ''}
                                                >
                                                    {option.title}
                                                </option>
                                            )
                                        })}
                                </select>
                                {errors.paymentModality !== '' ? <span>{errors.paymentModality}</span> : ''}
                            </div>
                        </>
                    }
                    {
                        !signIn &&
                        <>
                            <div className="uk-margin">
                                <input className="uk-input" name="name" id="name" type="text" placeholder="*Nombre Completo" value={name} onChange={(e) => handleInput(e, validateName, setName)} />
                                {errors.name !== '' ? <span>{errors.name}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="email" id="email" type="email" placeholder="*Correo Electrónico" value={email} onChange={(e) => handleInput(e, validateEmail, setEmail)} />
                                {errors.email !== '' ? <span>{errors.email}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <PhoneInput withCountryCallingCode={false} defaultCountry="BO" international={true} className="uk-input input-phone" placeholder="Número celular" name="phone" id="phone" type="text" value={phone} onChange={setPhone} onBlur={() => validatePhone(phone)} />
                                {errors.phone !== '' ? <span>{errors.phone}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="organization" id="organization" type="text" placeholder="*Empresa" value={organization} onChange={(e) => handleInput(e, validateOrganization, setOrganization)} />
                                {errors.organization !== '' ? <span>{errors.organization}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="subject" id="subject" type="text" placeholder="*Asunto" value={subject} onChange={(e) => handleInput(e, validateSubject, setSubject)} onBlur={(e) => validateSubject(e.target.value)} />
                                {errors.subject !== '' ? <span>{errors.subject}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <textarea className="uk-textarea" rows="5" name="message" id="message" placeholder="Mensaje" value={message} onChange={(e) => handleInput(e, validateMessage, setMessage)} >
                                </textarea>
                                {errors.message !== '' ? <span>{errors.message}</span> : ''}
                            </div>
                        </>
                    }
                </fieldset>
                {
                    signIn
                        ? <Button btn={true} classStyle={'btn-dark'} text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmitSignIn(e)} />
                        : <Button btn={true} classStyle={'btn-normal'} text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmitContact(e)} />
                }
            </form >
        </>
    )
}

export { Form }