import React from 'react';


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <>
                {
                    modules &&
                    modulesToWrite.map(({ id, src, titleImg, item, title, teacher, date, content }) => {
                        return (
                            <li key={`module-${id}`} className="uk-width-1-12 card-container">
                                {/* <a className="uk-width-1-1 card-container uk-accordion-title" href="#"> */}
                                <div id={titleImg} className={`uk-card uk-card-default card ${styleName}`} onClick={this.handleClick}>
                                    <div className="uk-card-media-top">
                                        <img src={src} alt={titleImg} />
                                    </div>
                                    <div uk-slider-parallax="x: 100,-100" className="uk-card-body card-info">
                                        <div className="uk-card-badge uk-label number-module">{`Módulo ${item}`}</div>
                                        <h4 className="uk-card-title title-module">{title}</h4>
                                        <p className="teacher-module">{`Docente: ${teacher}`}</p>
                                        <p className="Date-module">{`Fecha de inicio: ${date}`}</p>
                                    </div>
                                </div>
                                <div className="info-module-spread-out hide">
                                    {this.state.isToggleOn ? 'shown' : 'hide'}
                                    {
                                        content.map(item => {
                                            return (
                                                <>
                                                    <h3 className="title-spread-out">{`Modulo ${item}: ${title}`}</h3>
                                                    <p className="content-spread-out">{`Fecha: ${date}`}</p>
                                                    <h4>Lista de contenidos:</h4>
                                                    <p className="content-spread-out">
                                                        {item}
                                                    </p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                {/* </a> */}
                            </li>
                        )
                    })
                }
                {/* {
                infoTeacher &&
                <div className="uk-accordion-content info-spread-out">
                    <h4 className="uk-card-title title">Docente: {name}</h4>
                    <p className="body">
                        {description}
                    </p>
                </div>
            } */}
            </>
        );
    }
}