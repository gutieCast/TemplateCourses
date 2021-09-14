import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
    if (!isBrowser) return { x: 0, y: 0 }

    const target = element ? element.current : document.body
    const position = target.getBoundingClientRect()

    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
    const position = useRef(getScrollPosition({ useWindow }))

    let throttleTimeout = null

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow })
        effect({ prevPos: position.current, currPos })
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait)
                }
            } else {
                callBack()
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, deps)
}

// /////////////////////////////////////////////////////////

// const PositionStore = () => {
//     const [renderCount, triggerReRender] = useState(0)
//     const heroPosition = useRef({ x: 10, y: 150 })
//     const buttonPosition = useRef({ x: 0, y: 0 })
//     let throttleTimeout = null

//     const getPos = (el, axis) => Math.round(el.current[axis])

//     const setPos = (el, pos) => {
//         el.current = pos
//         if (throttleTimeout !== null) return
//         // Only re-render the component every 0.3s
//         throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300)
//     }
//     return {
//         getHeroX: () => getPos(heroPosition, 'x'),
//         getHeroY: () => getPos(heroPosition, 'y'),
//         getButtonX: () => getPos(buttonPosition, 'x'),
//         getButtonY: () => getPos(buttonPosition, 'y'),
//         setHeroPosition: pos => setPos(heroPosition, pos),
//         setButtonPosition: pos => setPos(buttonPosition, pos),
//         renderCount
//     }
// }

// /////////////////inside FC:

// const [showBalloon, setShowBalloon] = useState(true)
// const positionsStore = PositionStore()
// const buttonRef = useRef(null)
// const heroRef = useRef(null)

// // Button scroll position
// useScrollPosition(
//     ({ currPos }) => {
//         positionsStore.setButtonPosition(currPos)
//         const { style } = buttonRef.current
//         style.bottom = `${100 + currPos.y}px`
//         style.right = `${100 + currPos.x}px`
//     },
//     [positionsStore],
//     null,
//     true
// )

// // Element scroll position
// useScrollPosition(
//     ({ currPos }) => positionsStore.setHeroPosition(currPos),
//     [],
//     heroRef,
//     false,
//     300
// )

// useEffect(() => {
//     const handleBalloon = () => {
//         let heroHeight = positionsStore.getHeroY();
//         let buttonHeight = positionsStore.getButtonY();

//         if (buttonHeight > heroHeight) {
//             setShowBalloon(false)
//         }
//     }
//     return () => {
//         handleBalloon()
//     }
// }, [])