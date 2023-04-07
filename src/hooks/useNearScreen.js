import { useEffect, useState, useRef} from 'react'

export default function useNearScreen({distance= '100px'} = {}) {
    const [ isNearScreen, setShow ] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        const onChange = (entries) => {
            const el = entries[0];
            console.log(el.isIntersecting)
            if(el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin:'150px'
        })

        observer.observe(fromRef.current)
        return () => {observer.disconnect()}
    },[])

    return {isNearScreen, fromRef}
}