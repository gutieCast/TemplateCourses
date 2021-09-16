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

    /////////////////////////////////////////////////USE HOOKS & REGISTRER FUNCTIONS


    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [profession, setProfession] = useState('');
    const [organization, setOrganization] = useState('');
    const [paymentModality, setPaymentModality] = useState(sessionStorage.getItem("option"))
    const [isDisabled, setIsDisabled] = useState(true)
    const [goPay, setGoPay] = useState(false);




    const options = [
        { value: 'sistema-modular', title: '1 módulo (Bs. 500)' },
        { value: 'sistema-tetramodular', title: '4 módulos (Bs. 1600)' },
        { value: 'diplomado-completo', title: '12 módulos (Bs. 3500)' }
    ];

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
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setIsDisabled(isErrors(errors))
    }, [name, lastname, email, phone, profession, organization, paymentModality]);

    const isErrors = (errors) => {
        console.log(errors);
        if (name === '' || lastname === '' || email === '' || phone === '' || organization === '' || profession === '' || paymentModality === null || paymentModality === '-- Escoje tu paquete --') {
            console.log('no cambiado todo');
            return true
        } else if (name && lastname && email && phone && organization && profession && paymentModality) {
            for (let key in errors) {
                if (errors[key] !== null && errors[key] !== "") {
                    console.log(Object.keys(errors) !== '');
                    return true
                }
            }
        } else {
            errors = {}
            return false
        }
    };

    /////////////////////////////////////////////////USE HOOKS & CONTACT FUNCTIONS

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitContact = (e) => {
        e.preventDefault();
        // const sendMessage = (name, email, phone, organization, subject, message) => {
        //     // async + arg
        //     // await api({
        //     //     method: "post",
        //     //     url: "/message[??].json",
        //     //     data: message[??],
        //     // });
        // };
        console.log('post: ', name, email, phone, organization, subject, message);
        setName('');
        setEmail('');
        setPhone('');
        setOrganization('');
        setSubject('');
        setMessage('');
        setIsDisabled(true);
        firstRender.current = true
    }


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setIsDisabled(isErrorsContact(errors))
    }, [name, email, phone, organization, subject, message]);

    const isErrorsContact = (errors) => {
        console.log(errors);
        if (name === '' || email === '' || phone === '' || organization === '' || subject === '' || message === '') {
            console.log('no cambiado todo');
            return true
        } else if (name && email && phone && organization && subject && message) {
            for (let key in errors) {
                if (errors[key] !== null && errors[key] !== "") {
                    console.log(Object.keys(errors) !== '');
                    return true
                }
            }
        } else {
            errors = {}
            return false
        }
    };

    return (
        <>
            {goPay && (<Redirect to={`${process.env.PUBLIC_URL}/modo-de-pago`} />)}
            <form className={signIn ? 'sign-form' : 'contact-form'} onSubmit={handleSubmit}>
                <fieldset className="uk-fieldset fieldset" >
                    {
                        signIn &&
                        <>
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
                                <select className="payment-modality" name="payment-modality" id="payment-modality" value={paymentModality} onChange={(e) => setPaymentModality(e.target.value)} onBlur={(e) => validatePaymentModality(e.target.value)}
                                >
                                    <option defaultValue=""> -- Escoje tu paquete -- </option>
                                    {
                                        options.map(option => {
                                            return (
                                                <option value={option.value} selected={paymentModality === option.value ? 'true' : ''}>
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
                                <input className="uk-input" name="name" id="name" type="text" placeholder="*Nombre Completo" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => validateName(e.target.value)} />
                                {errors.name !== '' ? <span>{errors.name}</span> : ''}
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
                                <input className="uk-input" name="organization" id="organization" type="text" placeholder="*Empresa" value={organization} onChange={(e) => setOrganization(e.target.value)} onBlur={(e) => validateOrganization(e.target.value)} />
                                {errors.organization !== '' ? <span>{errors.organization}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <input className="uk-input" name="subject" id="subject" type="text" placeholder="*Asunto" value={subject} onChange={(e) => setSubject(e.target.value)} onBlur={(e) => validateSubject(e.target.value)} />
                                {errors.subject !== '' ? <span>{errors.subject}</span> : ''}
                            </div>

                            <div className="uk-margin">
                                <textarea className="uk-textarea" rows="5" name="message" id="message" placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)} onBlur={(e) => validateMessage(e.target.value)}>
                                </textarea>
                                {errors.message !== '' ? <span>{errors.message}</span> : ''}
                            </div>
                        </>
                    }
                </fieldset>
                {
                    signIn
                        ? <Button btn={true} classStyle={'btn-dark'} text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmit(e)} />
                        : <Button btn={true} classStyle={'btn-normal'} text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmitContact(e)} />
                }
            </form >
        </>
    )
}

export { Form }