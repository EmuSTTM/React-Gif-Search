import { useContext, useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import GifContext from '../context/GifContext'

const INITIAL_PAGE = 0

export default function useGifs ({ keyword } = { keyword: null}) {
    const { gifs, setGifs } = useContext(GifContext)
    const [ page, setPage ] = useState(INITIAL_PAGE)
    const [ loading, setLoading ] = useState(false)
    const [ loadingNextPage, setLoadingNextPage ] = useState(false)

            // Recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(()=>{
        setLoading(true)



        getGifs({keyword : keywordToUse})
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            // Guardamos la keyword al localstorage
            localStorage.setItem('lastKeyword', keywordToUse)
            });
    }, [keyword, keywordToUse])


    useEffect(()=>{
        if ( page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({keyword : keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    },[page, keywordToUse])


    return { loading, loadingNextPage, gifs, setPage}
}