import { useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifContext from '../context/GifContext'

export default function useGifs ({ keyword } = { keyword: null}) {
    const { gifs, setGifs } = useContext(GifContext)
    const [ loading, setLoading ] = useState(false)

    
    useEffect(()=>{
        setLoading(true)
        // Recuperamos la keyword del localstorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')


        getGifs({keyword : keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // Guardamos la keyword al localstorage
            localStorage.setItem('lastKeyword', keywordToUse)
            });
    }, [keyword])
    return { loading, gifs}
}