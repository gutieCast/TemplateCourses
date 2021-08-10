import React from 'react'
import { useHistory } from 'react-router-dom'
import 'components/InvestmentInfo/components/Card/card.scss'
import { Button } from 'components'

const Card = ({ recomended, title, price, label, extraItem, description, linkButton }) => {

    const history = useHistory()

    const handleButton = (optionSelected) => {
        console.log('selected: ' + optionSelected);
        sessionStorage.setItem('option', optionSelected)
        history.push("/inscribirse")
    }

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
                <Button text="¡inscribirse!" classStyle={`${recomended ? 'btn-clear' : '' } `} onClick={() => handleButton({ linkButton })} />
            </div>
        </div>
    )
}

export { Card }