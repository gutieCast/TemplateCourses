import React from 'react'
import 'components/InvestmentInfo/components/Card/card.scss'

const Card = ({ recomended, title, price, label, extraItem, description }) => {
    return (
        <div className="card-container">
            {
                recomended &&
                <div className="recomended-container">
                    <p className="recomended">
                        opción recomendada
                    </p>
                </div>
            }
            <div className="uk-card uk-card-default uk-card-body card-investment" style={{ backgroundColor: `${recomended ? '#002D59' : 'transparent'}` }}>
                <h3 className="uk-card-title title-card" style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                    {title}
                </h3>
                <spam className="info-price" style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                    Bs.
                    <spam className="price" style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                        {`${price}`}
                    </spam>
                    <spam className="per-plan" style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                        {label}
                    </spam>
                </spam>
                {
                    extraItem &&
                    <p className="main-info">
                        {extraItem}
                    </p>

                }
                <ul className="description-investment" style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                    {
                        description.map((item, i) => {
                            return (
                                <li key={`plan-item-${i}`} style={{ color: `${recomended ? 'white' : '#002D59'}` }}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export { Card }