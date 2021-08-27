import React, { useState, useRef, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import { validations } from '../../../../helpers/validations';
import { Button } from '../../../Button';
import './contactForm.scss'

const ContactForm = () => {
    /////////////////////////////////////////////////////VALIDATIONS

    const { errors, validateName, validateEmail, validatePhone, validateOrganization, validateSubject, validateMessage } = validations

    console.log(errors);

    /////////////////////////////////////////////////USE STATES & REGISTRER FUNCTIONS
    const firstRender = useRef(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [organization, setOrganization] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)

    const handleSubmit = (e) => {
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
        setIsDisabled(pendingErrors(errors))
    }, [name, email, phone, organization, subject, message]);

    const pendingErrors = (errors) => {
        if (
            (name === '' || email === '' || phone === '' || organization === '' || subject === '' || message === '')
        ) {
            return true
        } else {
            validateName(name);
            validateEmail(email);
            validatePhone(phone);
            validateSubject(subject);
            validateMessage(message);
            for (let key in errors) {
                if (errors[key] !== null && errors[key] !== "") {
                    return true
                } else {
                    // errors = {}
                    return false
                }
            }
        }
    };

    return (
        <form className="contact-form">
            <fieldset className="uk-fieldset fieldset">
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
            </fieldset>
            <Button btn={true} classStyle={'btn-normal'} text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmit(e)} />
        </form >
    )
}

export { ContactForm }
