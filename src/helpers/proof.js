const inversion = [
    {
        title: 'SISTEMA MODULAR',
        price: '500',
        label: '/ 1 módulo',
        recomended: false,
        description: [
            'Cuota fija modular (sin descuentos).',
            'Inscripción inmediata.',
            'Suscripción a 1 módulo de los 12 en curso.',
            'Acceso a aula virtual y contenidos.',
            'Certificación al finalizar el diplomado.',
        ]
    },
    {
        title: 'DIPLOMADO COMPLETO',
        price: '3500',
        label: '/ 12 módulos',
        recomended: true,
        extraItem: 'Ahorras hasta 42%',
        description: [
            'Inscripción inmediata.',
            'Suscripción total (12 módulos).',
            'Acceso a aula virtual y contenidos.',
            'Incluye 1 diploma + 3 certificaciones.'
        ]
    },
    {
        title: 'SISTEMA TETRA-MODULAR',
        price: '1600',
        label: '/ 4 módulos',
        recomended: false,
        extraItem: 'Ahorras hasta 20%',
        description: [
            'Inscripción inmediata.',
            'Suscripción a 4 módulos de los 12 en curso.',
            'Acceso a aula virtual y contenidos.',
            'Certificación al finalizar el diplomado.'
        ]
    }
]

inversion.map(plan => {
    console.log(plan.title);
    console.log(plan.description);
    console.log('----------------');
});

