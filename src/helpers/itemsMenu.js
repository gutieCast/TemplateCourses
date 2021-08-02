import { AboutCourse, Profits, ForWho, Modules } from 'components'

const menu = [
    { name: 'acerca de', link: '/acerca-de', component: { AboutCourse } },
    { name: 'beneficios', link: '/beneficios', component: Profits },
    { name: '¿para quién?', link: '/para-quien', component: ForWho },
    { name: 'módulos', link: '/modulos', component: Modules },
    { name: 'docentes', link: '/docentes' },
    { name: 'inversión', link: '/inversion' },
    { name: 'contacto', link: '/contacto' }
]

export const options = menu