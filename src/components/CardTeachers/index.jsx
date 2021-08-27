import React, { useState } from 'react'
// import { InfoExpanded } from 'components/CardTeachers/component';
import './cardTeacher.scss'


const CardTeacher = ({ id, src, nameTeacher, description }) => {

    const [infoIsExpanded, setInfoIsExpanded] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        if (infoIsExpanded) {
            setInfoIsExpanded(false)
        } else {
            setInfoIsExpanded(true)
        }
    }

    return (
        <div className="card-container-teacher" tabindex="0">
            <div className="uk-card uk-card-default teacher-card">
                <div className="uk-animation-toggle uk-card-media-top card-img" >
                    <img src={src} alt={`${nameTeacher} card`} />
                    <div
                        className="uk-animation-slide-bottom-medium info-module-spread-out"
                    >
                        {/*  onMouseUp={(e) => handleClick(e)} ${infoIsExpanded ? 'shown' : 'hide'} <h3 className="title-spread-out">{nameTeacher}</h3> */}
                        <p className="text-spread-out">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardTeacher }
