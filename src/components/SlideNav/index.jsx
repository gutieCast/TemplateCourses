import React from 'react'
import { infoCourse } from 'helpers/data'
import { imgModules, imgTeachers } from 'helpers/images'
import { CardModule } from 'components/CardModule';
import { CardTeacher } from 'components/CardTeachers';
import 'components/SlideNav/slideNav.scss'

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
        <div uk-slider="autoplay-interval: 2500; pause-on-hover: true center: true" className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1" >
            <div className="uk-slider-container uk-grid slider-container">
                <ul className="uk-slider-items cards-container">
                    {
                        modules &&
                        infoModules.map((module, i) => {
                            return (
                                <li key={`module-${module.id}`} className="card-item-module">
                                    <CardModule
                                        id={module.id}
                                        idx={i}
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
                        infoTeachers.map((teacher, i) => {
                            return (
                                <li key={`teacher-${teacher.id}`} className="card-item-teacher">
                                    <CardTeacher
                                        id={teacher.id}
                                        idx= {i}
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
            <button
                className="uk-position-center-left uk-position-small"
                data-uk-slidenav-previous
                data-uk-slideshow-item="previous"
                href="#"
            ></button>
            <button
                className="uk-position-center-right uk-position-small button-slider"
                data-uk-slidenav-next
                data-uk-slideshow-item="next"
                href="#"
            ></button>
        </div>
    )
}

export { SlideNav }
