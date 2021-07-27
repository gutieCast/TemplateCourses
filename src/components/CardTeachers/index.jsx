import React, { useState } from 'react'
// import { InfoExpanded } from 'components/CardTeachers/component';


const CardTeacher = ({ id, src, nameTeacher, description }) => {

    const [infoIsExpanded, setInfoIsExpanded] = useState(false);

    return (
        <>
            <li
                // key={`teacher-${id}`}
                className="uk-width-1-12 card-container">
                <div
                    id={`teacher-${id}-card`}
                    className="uk-card uk-card-default teacher-card"
                    onClick={() => setInfoIsExpanded(true)}
                >
                    <div className="uk-card-media-top">
                        <img src={src} alt={`${nameTeacher} card`} />
                    </div>
                    {/* <InfoExpanded state={infoIsExpanded} handleClick={() => setInfoIsExpanded(false)} nameTeacher={nameTeacher} description={description} /> */}
                </div>
            </li>
        </>
    )
}

export { CardTeacher }
