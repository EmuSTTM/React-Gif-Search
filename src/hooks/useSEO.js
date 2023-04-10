import { useEffect, useRef } from 'react'

export default function useSEO
 ({ description, title }) {
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]'))
    useEffect(() => {
        const previousTitle = prevTitle.current
        if (title) {
            document.title = `RBG | ${decodeURI(title)}`
        }
        return () => document.title = previousTitle
    }, [title])
    

    useEffect(() => {
        const previousDescription = prevDescription.current.content
        const metaDescription = document.querySelector('meta[name="description"]')
        if (description) {
            
            metaDescription.setAttribute('content', decodeURI(description))
        }

        return () => metaDescription.setAttribute('content', previousDescription)
    }, [description])
}