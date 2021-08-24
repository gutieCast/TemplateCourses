import { AboutCourse, Profits, ForWho, Modules, Teachers, InvestmentInfo, Contact } from 'components'

const options = [
    { name: 'acerca de', link: '/#acerca-de', component: { AboutCourse }, hash: '#acerca-de' },
    { name: 'beneficios', link: '/#beneficios', component: { Profits }, hash: '#beneficios' },
    { name: '¿para quién?', link: '/#para-quien', component: { ForWho }, hash: '#para-quien' },
    { name: 'módulos', link: '/#modulos', component: { Modules }, hash: '#modulos' },
    { name: 'docentes', link: '/#docentes', component: { Teachers }, hash: '#docentes' },
    { name: 'inversión', link: '/#inversion', component: { InvestmentInfo }, hash: '#inversion' },
    { name: 'contacto', link: '/#contacto', component: { Contact }, hash: '#contacto' }
]

export const menu = options