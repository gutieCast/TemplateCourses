import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const colorPalette = [
        {
            label: 'blue',
            value: '#002D59'
        },
        {
            label: 'green',
            value: '#1EC88F'
        },
        {
            label: 'white',
            value: '#FFFFFF'
        },
        {
            label: 'orange',
            value: '#FF4B4B'
        },
        {
            label: 'gray',
            value: '#B2B2B2'
        },
        {
            label: 'ligth-gray',
            value: '#707070'
        },
        {
            label: 'ligth-blue',
            value: ' #F2FBFF'
        }
    ]

    const [color, setColor] = useState()

    return (
        <ThemeContext.Provider value={{
            color,
            setColor,
        }}>
            {children}
        </ThemeContext.Provider>
    )

}

export { ThemeProvider, ThemeContext }