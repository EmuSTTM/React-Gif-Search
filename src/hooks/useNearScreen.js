import { useEffect, useState, useRef} from 'react'

export default function useNearScreen({distance= '100px', externalRef, once=true} = {}) {
    const [ isNearScreen, setShow ] = useState(false)
    const fromRef = useRef()
    const element = externalRef ? externalRef.current : fromRef.current
    useEffect(() => {

        
        const onChange = (entries) => {
            const el = entries[0];
            console.log(el.isIntersecting)
            if(el.isIntersecting) {
                setShow(true)
                if(once) observer.disconnect()
                
            
            } else {
                if(!once)setShow(false)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        if (element) observer.observe(element)
        return () => {observer.disconnect()}
    },[element])

    return {isNearScreen, fromRef}
}