import React from 'react'
import './contentBox.scss'

const ContentBox = ({ theme, title, hideDiv, imgRoute, body, flowContent, children }) => {
    return (
        <>
            {
                hideDiv &&
                <div className={`content-box no-margin ${theme} ${flowContent}`}>
                    <h2 className="title-section-center">
                        {title}
                        <div className="title-line"></div>
                    </h2>
                    {children}
                </div>
            }
            {
                !hideDiv &&
                <div className={`content-box ${theme} ${flowContent}`}>
                    <div className="img-container">
                        <img className="img-section" src={imgRoute} alt="banner" />
                    </div>
                    <div className="content-container">
                        <h2 className="title-section">
                            {title}
                            <div className="title-line"></div>
                        </h2>
                        <p className='body-section'>
                            {body}
                        </p>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export { ContentBox }