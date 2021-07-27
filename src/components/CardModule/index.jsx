import React, { useState } from 'react'
import ReactModal from 'react-modal'
import 'components/CardModule/card.scss'

ReactModal.setAppElement('#root')

const CardModule = ({ id, idx, src, titleImg, item, title, teacher, date, content }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <li key={`module-${id}`} uk-slider-item={idx} className="uk-width-1-12 card-item">
                <button className="card-container" onClick={() => setModalIsOpen(true)}>
                    <div className="uk-card uk-card-default module-card">
                        <div className="uk-card-media-top card-img">
                            <img src={src} alt={titleImg} />
                        </div>
                        <div
                            uk-slider-parallax="x: 50,-50"
                            className="uk-card-body card-info"
                        >
                            <div className="uk-card-badge uk-label label-module">{`Módulo ${item}`}</div>
                            <h4 className="uk-card-title title-module">{title}</h4>
                            <p className="text-module">{`Docente: ${teacher}`}</p>
                            <p className="text-module">{`Fecha de inicio: ${date}`}</p>
                        </div>
                    </div>
                </button>
            </li>
            <ReactModal
                id={`info-module${id}`}
                className="modal"
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                preventScroll={true}
            >
                <div className="modal-body">
                    <button uk-icon="close" className="uk-modal-close modal-button-close" onClick={() => setModalIsOpen(false)}></button>
                    <h3 className="modal-title">{`Modulo ${item}: ${title}`}</h3>
                    <p className="modal-text">{`Fecha: ${date}`}</p>
                    <div className="content-modal">
                        <h4 className="modal-subtitle">Lista de contenidos:</h4>
                        <ul className="sillabus">
                            {
                                content.map((item, i) => {
                                    return (
                                        <li key={`topic-${i}`} className="topic">
                                            <p className="modal-text">
                                                {item}
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}

export { CardModule }