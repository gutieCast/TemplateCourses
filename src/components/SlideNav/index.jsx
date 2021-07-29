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
        <div data-uk-slider="autoplay-interval: 2500; pause-on-hover: true" className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1" >
            <div className="uk-slider-container slider-container">
                <ul className="uk-slider-items uk-grid cards-container">
                    {
                        modules &&
                        infoModules.map((module, i) => {
                            return (
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
                            )

                        })
                    }

                    {
                        teachers &&
                        infoTeachers.map((teacher) => {
                            return (
                                <CardTeacher
                                    id={teacher.id}
                                    src={teacher.src}
                                    nameTeacher={teacher.name}
                                    description={teacher.description}
                                />
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
