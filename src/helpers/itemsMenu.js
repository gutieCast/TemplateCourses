import { AboutCourse, Profits, ForWho, Modules, Teachers, InvestmentInfo, Contact } from '../components'

const options = [
    { name: 'acerca de', link: `${process.env.PUBLIC_URL}/#acerca-de`, component: { AboutCourse } },
    { name: 'beneficios', link: `${process.env.PUBLIC_URL}/#beneficios`, component: { Profits } },
    { name: '¿para quién?', link: `${process.env.PUBLIC_URL}/#para-quien`, component: { ForWho } },
    { name: 'módulos', link: `${process.env.PUBLIC_URL}/#modulos`, component: { Modules } },
    { name: 'docentes', link: `${process.env.PUBLIC_URL}/#docentes`, component: { Teachers } },
    { name: 'inversión', link: `${process.env.PUBLIC_URL}/#inversion`, component: { InvestmentInfo } },
    { name: 'contacto', link: `${process.env.PUBLIC_URL}/#contacto`, component: { Contact } }
]

export const menu = options