const errors = {};

const validateName = (name) => {
    if (!name || name === '' || name === "undefined") {
        return errors.name = "Por favor, ingrese su nombre"
    } else if (!name.match(/^[a-zA-Z\s]+$/)) {
        return errors.name = "Use sólo letras";
        // } else if (name.length > 30) {
        //     return errors.name = "El nombre debe tener menos de 30 caracteres"
    } else {
        return errors.name = ''
    }
};

const validateLastname = (lastname) => {
    if (!lastname || lastname === '' || lastname === "undefined") {
        return errors.lastname = "Por favor, ingresar su apellido"
    } else if (!lastname.match(/^[a-zA-Z\s]+$/)) {
        return errors.lastname = "Use sólo letras"
        // } else if (lastname.length > 30) {
        //     return errors.lastName = "El apellido debe tener menos de 30 caracteres"
    } else {
        return errors.lastname = ''
    }
};

const validateEmail = (email) => {
    const regExEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!email || email === '' || email === "undefined") {
        return errors.email = "Por favor, ingrese su correo electrónico";
    } else if (!regExEmail.test(email)) {
        return errors.email = "El dato ingresado no parece ser un correo electrónico";
    } else if (regExEmail.test(email)) {
        return errors.email = ''
    }
};

const validatePhone = (phone) => {
    const regExPhone = /^[\]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,6}$/im;
    if (!phone || phone === '' || phone === "undefined") {
        return errors.phone = "Por favor, ingrese su número telefónico"
    } else if (!regExPhone.test(phone)) {
        return errors.phone = "El dato ingresado no parece ser un teléfono"
    } else if (regExPhone.test(phone)) {
        return errors.phone = ''
    }
};

const validateProfession = (profession) => {
    if (!profession || profession === '' || profession === "undefined") {
        return errors.profession = "Por favor, ingrese su profesión"
    } else if (!profession.match(/^[a-zA-Z\s]+$/)) {
        return errors.profession = "Use sólo letras"
    } else {
        return errors.profession = ''
    }
};

const validateOrganization = (organization) => {
    if (!organization || organization === '' || organization === "undefined") {
        return errors.organization = "Por favor, ingrese el nombre de la institución o empresa donde trabaja actualmente"
    } else if (!organization.match(/^[a-zA-Z\s]+$/)) {
        return errors.organization = "Use sólo letras"
    } else {
        return errors.organization = ''
    };
}

const validatePaymentModality = (modality) => {
    if (modality === '' || modality === '-- Escoje tu paquete --') {
        return errors.paymentModality = 'Por favor, escoga un paquete'
    } else {
        return errors.paymentModality = ''
    }
}

const validateSubject = (subject) => {
    if (!subject || subject === '' || subject === "undefined") {
        return errors.subject = "Por favor, ingrese el asunto"
    } else {
        return errors.subject = ''
    }
};

const validateMessage = (message) => {
    if (!message || message === '' || message === "undefined") {
        return errors.message = "Por favor, ingrese su mensaje"
    } else if (message.length < 15 || message.length > 280) {
        return errors.message = "Mínimo 15 caracteres y máximo 280"
    } else {
        return errors.message = ''
    }
};

export const validations = { errors, validateName, validateLastname, validateEmail, validatePhone, validateProfession, validateOrganization, validatePaymentModality, validateSubject, validateMessage };