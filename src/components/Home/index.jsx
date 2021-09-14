import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { Hero } from './components/Hero'
import { ButtonFixed } from './components/ButtonFixed'
import { AboutCourse } from '../AboutCourse'
import { ForWho } from '../ForWho'
import { Profits } from '../Profits'
import { Modules } from '../Modules'
import { Teachers } from '../Teachers'
import { Contact } from '../Contact'
import { InvestmentInfo } from '../InvestmentInfo'


const PositionStore = () => {
    const [renderCount, triggerReRender] = useState(0)
    const heroPosition = useRef({ x: 10, y: 150 })
    const buttonPosition = useRef({ x: 0, y: 0 })
    let throttleTimeout = null

    const getPos = (el, axis) => Math.round(el.current[axis])

    const setPos = (el, pos) => {
        el.current = pos
        if (throttleTimeout !== null) return
        // Only re-render the component every 0.3s
        throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
    }

    return {
        getHeroX: () => getPos(heroPosition, 'x'),
        getHeroY: () => getPos(heroPosition, 'y'),
        getButtonX: () => getPos(buttonPosition, 'x'),
        getButtonY: () => getPos(buttonPosition, 'y'),
        setHeroPosition: pos => setPos(heroPosition, pos),
        setButtonPosition: pos => setPos(buttonPosition, pos),
        renderCount
    }
}

const Home = () => {
    const [showBalloon, setShowBalloon] = useState(true)
    const positionsStore = PositionStore()
    const buttonRef = useRef(null)
    const heroRef = useRef(null)

    // Button scroll position
    useScrollPosition(
        ({ currPos }) => {
            positionsStore.setButtonPosition(currPos)
            const { style } = buttonRef.current
            style.bottom = `${100 + currPos.y}px`
            style.right = `${100 + currPos.x}px`
        },
        [positionsStore],
        null,
        true
    )

    // Element scroll position
    useScrollPosition(
        ({ currPos }) => positionsStore.setHeroPosition(currPos),
        [],
        heroRef,
        false,
        300
    )

    useEffect(() => {
        const handleBalloon = () => {
            let heroHeight = positionsStore.getHeroY();
            let buttonHeight = positionsStore.getButtonY();

            if (buttonHeight > heroHeight) {
                setShowBalloon(false)
            }
        }
        return () => {
            handleBalloon()
        }
    }, [])



    return (
        <>
            <ButtonFixed ref={buttonRef} showBalloon={showBalloon} />
            <Hero ref={heroRef} />
            <AboutCourse />
            <ForWho />
            <Profits />
            <Modules />
            <Teachers />
            <InvestmentInfo />
            <Contact />
        </>
    )
}

export { Home }