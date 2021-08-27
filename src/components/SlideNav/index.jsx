import React from 'react'
import { infoCourse } from '../../helpers/data'
import { imgModules, imgTeachers } from '../../helpers/images'
import { CardModule } from '../CardModule';
import { CardTeacher } from '../CardTeachers';
import './slideNav.scss'

const SlideNav = ({ modules, teachers }) => {

    const infoModules = [];
    const { modulos } = infoCourse
    for (let i = 0; i < modulos.length; i++) {
        infoModules.push({
            ...modulos[i],
            ...(imgModules.find((img) => img.id === modulos[i].item))
        });
    }

    const infoTeachers = [];
    const { docentes } = infoCourse
    for (let i = 0; i < docentes.length; i++) {
        infoTeachers.push({
            ...docentes[i],
            ...(imgTeachers.find((img) => img.id === i + 1))
        });
    }

    return (
        <div uk-slider="autoplay: true; autoplay-interval: 2500; pause-on-hover: true; center: true" className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1" >
            <div class="uk-position-relative position-slider">
                <div className="uk-slider-container uk-grid slider-container uk-child-width-l-6@l">
                    <ul className={`uk-slider-items cards-container ${modules ? 'large' : ''}`}>
                        {
                            modules &&
                            infoModules.map((module, idx) => {
                                return (
                                    <li uk-slider-item={`${idx}`} key={`module-${module.id}`} className="card-item-module">
                                        <CardModule
                                            id={module.id}
                                            src={module.src}
                                            titleImg={module.titleImg}
                                            item={module.item}
                                            title={module.title}
                                            teacher={module.teacher}
                                            date={module.date}
                                            content={module.content}
                                        />
                                    </li>
                                )

                            })
                        }

                        {
                            teachers &&
                            infoTeachers.map((teacher, idx) => {
                                return (
                                    <li uk-slider-item={`${idx}`} key={`teacher-${teacher.id}`} className="card-item-teacher">
                                        <CardTeacher
                                            id={teacher.id}
                                            src={teacher.src}
                                            nameTeacher={teacher.name}
                                            description={teacher.description}
                                        />
                                    </li>
                                )
                            })

                        }
                    </ul>
                </div>
                <a class="uk-position-center-left button-slider left" href="#" uk-slider-item="previous">
                    <span uk-icon="icon: chevron-left; ratio: 2"></span>
                </a>
                <a class="uk-position-center-right button-slider right" href="#" uk-slider-item="next">
                    <span uk-icon="icon: chevron-right; ratio: 2"></span>
                </a>
            </div>
            <ul class="uk-slider-nav uk-dotnav"></ul>
        </div>
    )
}

export { SlideNav }
