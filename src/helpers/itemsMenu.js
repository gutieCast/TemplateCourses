import { AboutCourse, Profits, ForWho, Modules, Teachers, InvestmentInfo, Contact } from '../components'

const options = [
    { name: 'acerca de', link: `${process.env.PUBLIC_URL}/#acerca-de`, component: { AboutCourse }, hash: '#acerca-de' },
    { name: 'beneficios', link: `${process.env.PUBLIC_URL}/#beneficios`, component: { Profits }, hash: '#beneficios' },
    { name: '¿para quién?', link: `${process.env.PUBLIC_URL}/#para-quien`, component: { ForWho }, hash: '#para-quien' },
    { name: 'módulos', link: `${process.env.PUBLIC_URL}/#modulos`, component: { Modules }, hash: '#modulos' },
    { name: 'docentes', link: `${process.env.PUBLIC_URL}/#docentes`, component: { Teachers }, hash: '#docentes' },
    { name: 'inversión', link: `${process.env.PUBLIC_URL}/#inversion`, component: { InvestmentInfo }, hash: '#inversion' },
    { name: 'contacto', link: `${process.env.PUBLIC_URL}/#contacto`, component: { Contact }, hash: '#contacto' }
]

export const menu = options