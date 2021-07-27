const imgTeachers = [
    { id: 1, src: 'teacher1' },
    { id: 2, src: 'teacher2' },
    { id: 3, src: 'teacher3' },
    { id: 4, src: 'teacher4' },
    { id: 5, src: 'teacher5' },
    { id: 6, src: 'teacher6' },
    { id: 7, src: 'teacher7' },
    { id: 8, src: 'teacher8' },
    { id: 9, src: 'teacher9' },
    { id: 10, src: 'teacher10' },
    { id: 11, src: 'teacher11' },
    { id: 12, src: 'teacher12' }
];

const docentes = [
    {
        name: 'Alejandro Aramayo',
        description: [
            ' 1Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Aurus Nefertum',
        description: [
            '2 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Daniel Oropeza',
        description: [
            '3 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Diego Urioste',
        description: [
            '4 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Erick Saa',
        description: [
            '5 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Jose Antonio Bedregal',
        description: [
            '6 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Lidia Requena',
        description: [
            '7 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Lilian Ruby',
        description: [
            ' 8Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Patricia Chavez',
        description: [
            '9 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Rocío Montenegro',
        description: [
            '10 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Seulla Gil',
        description: [
            '11 Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            'Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
    {
        name: 'Solia enteno',
        description: [
            'Especialista Ambiental enfocado en la integración de nuevas tecnologías.',
            '12 Experiencia de 4 años en el estudio de mercados financieros en economías descentralizadas, usos y campos de aplicación dentro de la tecnología blockchain, así como también en el Trading para la compra - venta de cripto activos y apertura al mercado bursátil tradicional.'
        ]
    },
];

const mergeArr = () => {
    const infoTeachers = [];
    for (let i = 0; i < docentes.length; i++) {
        infoTeachers.push({
            ...docentes[i],
            ...(imgTeachers.find((img) => img.id === i + 1))
        });
    }
    console.log(infoTeachers);
    return infoTeachers
}

// mergeArr();

// constructor(props) {
//     super(props);
//     // this.showInfo = this.showInfo.bind(this);
//     // this.hideInfo = this.hideInfo.bind(this);

//     this.state = { active: null };
// }

const obj = {
    atr1: '',
    atr2: '',
    atr3: ''
}

const verifObj = () => {
    if (obj.atr1 == obj.atr2 == obj.atr3 == '') {
        console.log("por ahí es");
    }
}

verifObj();